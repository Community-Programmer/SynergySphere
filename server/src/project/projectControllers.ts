import { Request, Response, NextFunction } from "express";
import { PrismaClient } from "@prisma/client";
import { projectSchema } from "../validation/projectValidation";

const prisma = new PrismaClient();

export const createProject = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const parseResult = projectSchema.safeParse(req.body);
    if (!parseResult.success) {
  return res.status(400).json({ errors: parseResult.error.issues });
    }
    const { name, tags, managerId, deadline, priority, image, description } = parseResult.data;
    const project = await prisma.project.create({
      data: {
        name,
        tags,
        managerId,
        deadline: new Date(deadline),
        priority,
        image,
        description,
      },
    });
    res.status(201).json(project);
  } catch (err) {
    next(err);
  }
};

export const getProjects = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const projects = await prisma.project.findMany({
      include: { manager: true },
    });
    res.json(projects);
  } catch (err) {
    next(err);
  }
};

export const getProjectById = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { id } = req.params;
    const project = await prisma.project.findUnique({
      where: { id },
      include: { manager: true },
    });
    if (!project) return res.status(404).json({ message: "Project not found" });
    res.json(project);
  } catch (err) {
    next(err);
  }
};

export const updateProject = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { id } = req.params;
    const parseResult = projectSchema.partial().safeParse(req.body);
    if (!parseResult.success) {
  return res.status(400).json({ errors: parseResult.error.issues });
    }
    const { name, tags, managerId, deadline, priority, image, description } = parseResult.data;
    const project = await prisma.project.update({
      where: { id },
      data: {
        name,
        tags,
        managerId,
        deadline: deadline ? new Date(deadline) : undefined,
        priority,
        image,
        description,
      },
    });
    res.json(project);
  } catch (err) {
    next(err);
  }
};

export const deleteProject = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { id } = req.params;
    await prisma.project.delete({ where: { id } });
    res.json({ message: "Project deleted" });
  } catch (err) {
    next(err);
  }
};
