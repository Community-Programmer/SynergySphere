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
