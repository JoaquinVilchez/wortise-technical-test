import { z } from 'zod';

export const articleSchema = z.object({
  title: z
    .string()
    .min(3, { message: 'El título debe tener al menos 3 caracteres.' }),
  body: z
    .string()
    .min(10, { message: 'El texto debe tener al menos 10 caracteres.' }),
  imageUrl: z.string().url({ message: 'Debe ser una URL válida.' }),
  authorId: z.string().optional(),
  createdAt: z.date().optional(),
});

export type Article = z.infer<typeof articleSchema>;

export type DbArticle = Article & {
  _id: string;
};
