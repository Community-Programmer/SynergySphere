import { Router } from "express";
import {
	createProject,
	getProjects,
	getProjectById,
	updateProject,
	deleteProject,
} from "./projectControllers";
import { authenticate } from "../middleware/authMiddleware";

const router = Router();

router.use(authenticate);
router.post("/", createProject);
router.get("/", getProjects);
router.get("/:id", getProjectById);
router.put("/:id", updateProject);
router.delete("/:id", deleteProject);

export default router;
