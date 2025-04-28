'use client';

import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';
import { toast } from 'react-toastify';

interface DeleteArticleParams {
  id: string;
}

export function useDeleteArticle() {
  const queryClient = useQueryClient();
  const router = useRouter();

  const mutation = useMutation({
    mutationFn: async ({ id }: DeleteArticleParams) => {
      const res = await fetch(`/api/articles/${id}`, {
        method: 'DELETE',
      });

      if (!res.ok) {
        throw new Error('Error al eliminar el artículo');
      }

      return res.json();
    },
    onSuccess: () => {
      toast.success('¡Artículo eliminado correctamente!');
      queryClient.invalidateQueries({ queryKey: ['articles'] });
      router.push('/articles');
    },
    onError: () => {
      toast.error('Hubo un error al eliminar el artículo. Intenta de nuevo.');
    },
  });

  return mutation;
}
