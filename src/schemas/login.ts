import { z } from 'zod';

export const loginSchema = z.object({
  email: z.string().email('Ingresá un email válido'),
  password: z.string().min(8, 'Usá al menos 8 caracteres'),
});
