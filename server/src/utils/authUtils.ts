export async function sendPasswordResetEmail(email: string, token: string) {
  const resetUrl = `${process.env.FRONTEND_URL}/reset-password?token=${token}`;
  await transporter.sendMail({
    from: process.env.EMAIL_USER,
    to: email,
    subject: "Password Reset Request",
    html: `<p>Click <a href=\"${resetUrl}\">here</a> to reset your password. This link expires in 30 minutes.</p>`,
  });
}
import bcrypt from "bcryptjs";
import transporter from "./mailer";

export async function hashPassword(password: string) {
  return bcrypt.hash(password, 10);
}

export async function sendVerificationEmail(email: string, token: string) {
  const verificationUrl = `${process.env.FRONTEND_URL}/verify-email?token=${token}`;
  await transporter.sendMail({
    from: process.env.EMAIL_USER,
    to: email,
    subject: "Verify your email",
    html: `<p>Click <a href=\"${verificationUrl}\">here</a> to verify your email.</p>`,
  });
}
