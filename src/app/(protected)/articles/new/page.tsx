'use client';

import ArticleForm from '@/src/app/components/forms/ArticleForm';
import PageHeader from '@/src/app/components/PageHeader';
import { useCreateArticle } from '@/src/hooks/useCreateArticle';
import type { CreateArticle } from '@/src/schemas/article';
import { ChevronLeft } from 'lucide-react';
import Link from 'next/link';

export default function CreateArticle() {
  const createMutation = useCreateArticle();

  const createArticle = (data: CreateArticle) => {
    createMutation.mutate(data);
  };

  return (
    <>
      <PageHeader
        title="Nuevo artículo"
        actions={
          <Link
            href="/articles"
            className="flex items-center text-gray-500 hover:text-gray-700"
          >
            <ChevronLeft />
            Volver
          </Link>
        }
      />
      <ArticleForm
        onSubmit={createArticle}
        isSubmitting={createMutation.isPending}
      />
    </>
  );
}
