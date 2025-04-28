'use client';

import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';
import { toast } from 'react-toastify';
import { UpdateArticle } from '../schemas/article';

interface UpdateArticleParams {
  id: string;
  data: UpdateArticle;
}

export function useUpdateArticle() {
  const queryClient = useQueryClient();
  const router = useRouter();

  const mutation = useMutation({
    mutationFn: async ({ id, data }: UpdateArticleParams) => {
      const res = await fetch(`/api/articles/${id}`, {
        method: 'PUT',
        body: JSON.stringify(data),
        headers: { 'Content-Type': 'application/json' },
      });

      if (!res.ok) {
        throw new Error('Error al editar el artículo');
      }

      return res.json();
    },
    onSuccess: () => {
      toast.success('¡Artículo editado correctamente!');
      queryClient.invalidateQueries({ queryKey: ['articles'] });
      router.push('/articles');
    },
    onError: () => {
      toast.error('Hubo un error al editar el artículo. Intenta de nuevo.');
    },
  });

  return mutation;
}
