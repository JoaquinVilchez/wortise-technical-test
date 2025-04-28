'use client';

import { useQuery } from '@tanstack/react-query';

export function useGetAuthor(id: string) {
  const { data, isLoading } = useQuery({
    queryKey: ['author', id],
    queryFn: async () => {
      const res = await fetch(`/api/authors/${id}`);
      if (!res.ok) {
        throw new Error('Error al obtener el autores');
      }
      return res.json();
    },
  });

  return {
    author: data?.data,
    isLoading,
  };
}
