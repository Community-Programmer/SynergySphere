
import { Router } from "express";
import {
	createProject,
	getProjects,
	getProjectById,
	updateProject,
	deleteProject,
	getProjectsForUser,
	getProjectDetail,
} from "./projectControllers";
import { authenticate } from "../middleware/authMiddleware";

const router = Router();

router.use(authenticate);

router.get("/user-projects", getProjectsForUser);
router.get("/:id/detail", getProjectDetail);
router.post("/", createProject);
router.get("/", getProjects);
router.get("/:id", getProjectById);
router.put("/:id", updateProject);
router.delete("/:id", deleteProject);

export default router;
