import { z } from 'zod';

export const authorSchema = z.object({
  name: z.string(),
  email: z.string().email(),
  createdAt: z.date().optional(),
});

export type Author = z.infer<typeof authorSchema>;
export type GetAuthor = Author & { _id: string };
