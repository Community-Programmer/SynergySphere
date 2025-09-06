import { z } from "zod";

export const projectSchema = z.object({
  name: z.string().min(1),
  tags: z.array(z.string()).optional(),
  managerId: z.string().min(1),
  deadline: z.string().refine((val) => !isNaN(Date.parse(val)), {
    message: "Invalid date format",
  }),
  priority: z.enum(["Low", "Medium", "High"]),
  image: z.string().url().optional(),
  description: z.string().optional(),
});
