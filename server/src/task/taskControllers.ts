import { Request, Response, NextFunction } from "express";
import { PrismaClient } from "@prisma/client";
import { taskSchema } from "../validation/taskValidation";

const prisma = new PrismaClient();

export const createTask = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const parseResult = taskSchema.safeParse(req.body);
    if (!parseResult.success) {
      return res.status(400).json({ errors: parseResult.error.issues });
    }
    const { title, assigneeId, projectId, tags, dueDate, image, status, description } = parseResult.data;
    const task = await prisma.task.create({
      data: {
        title,
        assigneeId,
        projectId,
        tags,
        dueDate: new Date(dueDate),
        image,
        status,
        description,
      },
    });
    res.status(201).json(task);
  } catch (err) {
    next(err);
  }
};

export const getTasks = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const tasks = await prisma.task.findMany({
      include: { assignee: true, project: true },
    });
    res.json(tasks);
  } catch (err) {
    next(err);
  }
};

export const getTaskById = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { id } = req.params;
    const task = await prisma.task.findUnique({
      where: { id },
      include: { assignee: true, project: true },
    });
    if (!task) return res.status(404).json({ message: "Task not found" });
    res.json(task);
  } catch (err) {
    next(err);
  }
};

export const updateTask = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { id } = req.params;
    const parseResult = taskSchema.partial().safeParse(req.body);
    if (!parseResult.success) {
      return res.status(400).json({ errors: parseResult.error.issues });
    }
    const { title, assigneeId, projectId, tags, dueDate, image, status, description } = parseResult.data;
    const task = await prisma.task.update({
      where: { id },
      data: {
        title,
        assigneeId,
        projectId,
        tags,
        dueDate: dueDate ? new Date(dueDate) : undefined,
        image,
        status,
        description,
      },
    });
    res.json(task);
  } catch (err) {
    next(err);
  }
};

export const deleteTask = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { id } = req.params;
    await prisma.task.delete({ where: { id } });
    res.json({ message: "Task deleted" });
  } catch (err) {
    next(err);
  }
};
