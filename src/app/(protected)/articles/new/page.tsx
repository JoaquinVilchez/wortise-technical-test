'use client';

import ArticleForm from '@/src/app/components/forms/ArticleForm';
import PageHeader from '@/src/app/components/PageHeader';
import { Article } from '@/src/schemas/article';
import { useMutation } from '@tanstack/react-query';
import { ChevronLeft } from 'lucide-react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function CreateArticle() {
  const router = useRouter();

  const mutation = useMutation({
    mutationFn: (data: Omit<Article, 'authorId' | 'createdAt'>) =>
      fetch('/api/articles', {
        method: 'POST',
        body: JSON.stringify(data),
        headers: { 'Content-Type': 'application/json' },
      }).then((res) => {
        if (!res.ok) throw new Error('Error al crear');
        return res.json();
      }),
    onSuccess: () => {
      // QueryClient.invalidateQueries({ queryKey: ['articles'] });
      router.push('/articles');
    },
    onError: (error) => {
      console.error('Error al crear el artículo:', error);
    },
  });

  return (
    <>
      <PageHeader
        title="Nuevo artículo"
        actions={
          <Link
            href="/articles"
            className="flex items-center text-gray-500 hover:text-gray-700"
          >
            {' '}
            <ChevronLeft />
            Volver
          </Link>
        }
      />
      <ArticleForm
        onSubmit={mutation.mutate}
        isSubmitting={mutation.isPending}
      />
    </>
  );
}
