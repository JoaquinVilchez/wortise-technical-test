'use client';

import { authClient } from '@/lib/auth-client';
import { signUpSchema } from '@/src/schemas/signup';
import { zodResolver } from '@hookform/resolvers/zod';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import Button from '../Button';
import FormErrorMessage from './ui/FormErrorMessage';

export default function SignUpForm() {
  type SignUpFormData = {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    confirmPassword: string;
  };

  const router = useRouter();
  const [errorMessage, setErrorMessage] = useState('');
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<SignUpFormData>({
    resolver: zodResolver(signUpSchema),
  });

  const onSubmit = async (data: SignUpFormData) => {
    await authClient.signUp.email(
      {
        email: data.email,
        password: data.password,
        name: `${data.firstName} ${data.lastName}`,
      },
      {
        onSuccess: () => {
          router.push('/login');
        },
        onError: (ctx) => {
          setErrorMessage(ctx.error.message);
        },
      },
    );
  };

  return (
    <div>
      <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label htmlFor="firstName">Nombre</label>
          <input
            type="text"
            id="firstName"
            {...register('firstName')}
            placeholder="Ingrese su nombre"
            className="mt-1 block w-full rounded-md px-4 py-2 border border-gray-300"
            disabled={isSubmitting}
          />
          <FormErrorMessage message={errors.firstName?.message} />
        </div>

        <div>
          <label htmlFor="lastName">Apellido</label>
          <input
            type="text"
            id="lastName"
            {...register('lastName')}
            placeholder="Ingrese su apellido"
            className="mt-1 block w-full rounded-md px-4 py-2 border border-gray-300"
            disabled={isSubmitting}
          />
          <FormErrorMessage message={errors.lastName?.message} />
        </div>

        <div>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            {...register('email')}
            placeholder="Ingrese su email"
            className="mt-1 block w-full rounded-md px-4 py-2 border border-gray-300"
            disabled={isSubmitting}
          />
          <FormErrorMessage message={errors.email?.message} />
        </div>

        <div>
          <label htmlFor="password">Contraseña</label>
          <input
            type="password"
            id="password"
            {...register('password')}
            placeholder="Ingrese su contraseña"
            className="mt-1 block w-full rounded-md px-4 py-2 border border-gray-300"
            disabled={isSubmitting}
          />
          <FormErrorMessage message={errors.password?.message} />
        </div>
        <div>
          <label htmlFor="confirmPassword">Confirmar contraseña</label>
          <input
            type="password"
            id="confirmPassword"
            {...register('confirmPassword')}
            placeholder="Ingrese nuevamente su contraseña"
            className="mt-1 block w-full rounded-md px-4 py-2 border border-gray-300"
            disabled={isSubmitting}
          />
          <FormErrorMessage message={errors.confirmPassword?.message} />
        </div>

        {errorMessage && (
          <div className="mb-4 rounded-md bg-red-100 border border-red-300 text-red-700 px-4 py-2 text-sm">
            {errorMessage}
          </div>
        )}

        <Button
          type="submit"
          className="w-full bg-blue-600 text-white font-semibold py-2 px-4 rounded-md hover:bg-blue-700 disabled:bg-blue-300 disabled:cursor-not-allowed"
          isLoading={isSubmitting}
        >
          Registrarme
        </Button>

        <div className="text-center">
          <p>
            ¿Ya tienes una cuenta?{' '}
            <a href="login" className="text-blue-600 hover:underline">
              Iniciar sesión
            </a>
          </p>
        </div>
      </form>
    </div>
  );
}
