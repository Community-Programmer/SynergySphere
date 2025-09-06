import { z } from "zod";

export const taskSchema = z.object({
  name: z.string().min(1),
  assigneeId: z.string().min(1),
  projectId: z.string().min(1),
  tags: z.array(z.string()).optional(),
  deadline: z.string().refine((val) => !isNaN(Date.parse(val)), {
    message: "Invalid date format",
  }),
  image: z.url().optional(),
  description: z.string().optional(),
});
