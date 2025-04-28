'use client';

import { authClient } from '@/lib/auth-client';
import { loginSchema } from '@/src/schemas/login';
import { zodResolver } from '@hookform/resolvers/zod';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import Button from '../Button';
import FormErrorMessage from './ui/FormErrorMessage';

export default function LoginForm() {
  type LoginFormData = {
    email: string;
    password: string;
  };

  const router = useRouter();
  const [errorMessage, setErrorMessage] = useState('');
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = async (data: LoginFormData) => {
    await authClient.signIn.email(
      {
        email: data.email,
        password: data.password,
        callbackURL: '/',
      },
      {
        onSuccess: () => {
          router.push('/');
        },
        onError: (ctx) => {
          setErrorMessage(ctx.error.message);
        },
      },
    );
  };

  return (
    <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
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
        Iniciar sesión
      </Button>

      <div className="text-center">
        <p>
          ¿No tienes cuenta?{' '}
          <a href="signup" className="text-blue-600 hover:underline">
            Regístrate
          </a>
        </p>
      </div>
    </form>
  );
}
