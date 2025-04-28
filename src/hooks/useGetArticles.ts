'use client';

import { GetArticle } from '@/src/schemas/article';
import { useQuery } from '@tanstack/react-query';
import { useState } from 'react';

interface UseGetArticlesResult {
  articles: GetArticle[];
  isLoading: boolean;
  currentPage: number;
  totalPages: number;
  totalArticles: number;
  search: string;
  setSearch: (search: string) => void;
  setPage: (page: number) => void;
}

export function useGetArticles(authorId = ''): UseGetArticlesResult {
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState('');

  const { data, isLoading } = useQuery({
    queryKey: ['articles', page, search, authorId],
    queryFn: async () => {
      const res = await fetch(
        `/api/articles?page=${page}&search=${search}&authorId=${authorId}`,
      );
      if (!res.ok) {
        throw new Error('Error al obtener los artículos');
      }
      return res.json();
    },
  });

  return {
    articles: data?.data || [],
    isLoading,
    currentPage: data?.currentPage || 1,
    totalPages: data?.totalPages || 1,
    totalArticles: data?.totalArticles || 0,
    search,
    setSearch,
    setPage,
  };
}
