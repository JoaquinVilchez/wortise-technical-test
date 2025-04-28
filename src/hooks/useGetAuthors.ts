'use client';

import { useQuery } from '@tanstack/react-query';

export function useGetAuthors() {
  const { data, isLoading } = useQuery({
    queryKey: ['authors'],
    queryFn: async () => {
      const res = await fetch('/api/authors');
      if (!res.ok) {
        throw new Error('Error al obtener los autores');
      }
      return res.json();
    },
  });

  return {
    authors: data?.data || [],
    isLoading,
  };
}
