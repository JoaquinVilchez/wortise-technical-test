import { z } from 'zod';

export const signUpSchema = z
  .object({
    firstName: z.string().min(1, 'Ingresá tu nombre'),
    lastName: z.string().min(1, 'Ingresá tu apellido'),
    email: z.string().email('Ingresá un email válido'),
    password: z.string().min(8, 'Usá al menos 8 caracteres'),
    confirmPassword: z.string().min(8, 'Confirmá con al menos 8 caracteres'),
  })
  .refine((data) => data.password === data.confirmPassword, {
    path: ['confirmPassword'],
    message: 'Las contraseñas no coinciden',
  });
