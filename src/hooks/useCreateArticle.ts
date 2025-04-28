'use client';

import { Article } from '@/src/schemas/article';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';
import { toast } from 'react-toastify';

export function useCreateArticle() {
  const queryClient = useQueryClient();
  const router = useRouter();

  const mutation = useMutation({
    mutationFn: async (data: Omit<Article, 'authorId' | 'createdAt'>) => {
      const res = await fetch('/api/articles', {
        method: 'POST',
        body: JSON.stringify(data),
        headers: { 'Content-Type': 'application/json' },
      });

      if (!res.ok) {
        throw new Error('Error al crear el artículo');
      }

      return res.json();
    },
    onSuccess: () => {
      toast.success('¡Artículo creado correctamente!');
      queryClient.invalidateQueries({ queryKey: ['articles'] });
      router.push('/articles');
    },
    onError: () => {
      toast.error('Hubo un error al crear el artículo. Intenta de nuevo.');
    },
  });

  return mutation;
}
