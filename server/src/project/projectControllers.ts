export const getProjectDetail = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { id } = req.params;
    const project = await prisma.project.findUnique({
      where: { id },
      include: {
        members: {
          include: {
            user: true,
          },
        },
        tasks: {
          include: {
            assignee: true,
          },
        },
      },
    });
    if (!project) return res.status(404).json({ message: "Project not found" });
    // Format members and tasks for frontend
    const members = project.members.map(m => ({
      id: m.user.id,
      firstname: m.user.firstname,
      lastname: m.user.lastname,
      email: m.user.email,
      role: m.role,
    }));
    const tasks = project.tasks.map(t => ({
      id: t.id,
      title: t.title,
      description: t.description,
      assignee: t.assignee ? {
        id: t.assignee.id,
        firstname: t.assignee.firstname,
        lastname: t.assignee.lastname,
        email: t.assignee.email,
      } : null,
      dueDate: t.dueDate,
      status: t.status,
    }));
    return res.json({
      id: project.id,
      name: project.name,
      description: project.description,
      image: project.image,
      tags: project.tags,
      deadline: project.deadline,
      priority: project.priority,
      members,
      tasks,
    });
  } catch (err) {
    next(err);
  }
};
export const getProjectsForUser = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const userId = req.user?.id;
    if (!userId) {
      return res.status(401).json({ message: "Unauthorized" });
    }
    const projects = await prisma.project.findMany({
      where: {
        members: {
          some: {
            userId: userId,
          },
        },
      },
      include: {
        members: true,
        tasks: true,
      },
    });
    // Dashboard summary: project name, task count, member count, image, description
    const projectSummaries = projects.map(project => ({
      id: project.id,
      name: project.name,
      taskCount: project.tasks.length,
      memberCount: project.members.length,
      image: project.image,
      description: project.description,
    }));
    return res.json({ projects: projectSummaries });
  } catch (err) {
    return res.status(500).json({ message: "Server error", error: err });
  }
};
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
