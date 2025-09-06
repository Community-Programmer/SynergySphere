import { Router } from "express";
import { signup, login, verifyEmail, requestPasswordReset, resetPassword } from "./authController";

const router = Router();


router.post("/signup", signup);
router.post("/login", login);
router.get("/verify-email", verifyEmail);

router.post("/request-password-reset", requestPasswordReset);
router.post("/reset-password", resetPassword);

export default router;
