import { z } from "zod";

export const signupSchema = z.object({
  firstname: z.string().min(1),
  lastname: z.string().min(1),
  email: z.string().email(),
  password: z.string().min(6),
});

export const loginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(6),
});

export const emailVerificationSchema = z.object({
  token: z.string().min(1),
});

export const passwordResetRequestSchema = z.object({
  email: z.string().email(),
});

export const passwordResetSchema = z.object({
  token: z.string().min(1),
  password: z.string().min(6),
});
