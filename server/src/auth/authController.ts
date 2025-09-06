import { NextFunction, Request, Response } from "express";
import createHttpError from "http-errors";
import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs";
import crypto from "crypto";
import { signToken } from "../utils/jwt";
import { hashPassword, sendVerificationEmail } from "../utils/authUtils";

const prisma = new PrismaClient();

const signup = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { firstname, lastname, email, password } = req.body;
    if (!firstname || !lastname || !email || !password) {
      return next(createHttpError(400, "All fields are required"));
    }
    const existingUser = await prisma.user.findUnique({ where: { email } });
    if (existingUser) {
      return next(createHttpError(409, "User already exists"));
    }
    const hashedPassword = await hashPassword(password);
    const user = await prisma.user.create({
      data: { firstname, lastname, email, password: hashedPassword },
    });
    const token = crypto.randomBytes(32).toString("hex");
    const expireAt = new Date(Date.now() + 1000 * 60 * 60);
    await prisma.emailVerificationToken.create({
      data: { userId: user.id, token, expireAt },
    });
    await sendVerificationEmail(email, token);
    res.status(201).json({ message: "User registered successfully. Please check your email to verify your account." });
  } catch (err) {
    console.log(err);
    return next(createHttpError(500, "Error while processing your request"));
  }
};

const login = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return next(createHttpError(400, "Email and password are required"));
    }
    const user = await prisma.user.findUnique({ where: { email } });
    if (!user || !user.password) {
      return next(createHttpError(401, "Invalid credentials"));
    }
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return next(createHttpError(401, "Invalid credentials"));
    }
    if (!user.emailVerified) {
      return next(createHttpError(403, "Please verify your email before logging in"));
    }
    // Generate JWT
    const token = signToken({ userId: user.id });
    res.cookie("token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      maxAge: 1000 * 60 * 60 * 24 * 7,
    });
    res.json({
      message: "Login successful",
      user: {
        id: user.id,
        firstname: user.firstname,
        lastname: user.lastname,
        email: user.email,
      },
    });
  } catch (err) {
    console.log(err);
    return next(createHttpError(500, "Error while processing your request"));
  }
};

const verifyEmail = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { token } = req.query;
    if (!token || typeof token !== "string") {
      return next(createHttpError(400, "Invalid token"));
    }

    const verification = await prisma.emailVerificationToken.findUnique({
      where: { token },
    });
    if (!verification || verification.expireAt < new Date()) {
      return next(createHttpError(400, "Token is invalid or expired"));
    }

    await prisma.user.update({
      where: { id: verification.userId },
      data: { emailVerified: new Date() },
    });

    await prisma.emailVerificationToken.delete({ where: { token } });

    res.json({ message: "Email verified successfully" });
  } catch (err) {
    console.log(err);
    return next(createHttpError(500, "Error while processing your request"));
  }
};

export { signup, login, verifyEmail };