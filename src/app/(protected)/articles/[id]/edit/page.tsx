'use client';

import ArticleForm from '@/src/app/components/forms/ArticleForm';
import PageHeader from '@/src/app/components/PageHeader';
import Spinner from '@/src/app/components/Spinner';
import { useGetArticle } from '@/src/hooks/useGetArticle';
import { useUpdateArticle } from '@/src/hooks/useUpdateArticle';
import type { UpdateArticle } from '@/src/schemas/article';
import { ChevronLeft } from 'lucide-react';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { toast } from 'react-toastify';

export default function UpdateArticle() {
  const { id } = useParams<{ id: string }>();
  const { data: article, isLoading, error } = useGetArticle(id);

  const updateMutation = useUpdateArticle();

  const updateForm = (data: UpdateArticle) => {
    if (!id) return;
    updateMutation.mutate({ id, data });
  };

  if (isLoading) {
    return <Spinner />;
  }

  if (error) {
    toast.error('Error al cargar el artículo');
    return (
      <div className="flex justify-center items-center min-h-[50vh]">
        <p className="text-xl font-semibold text-gray-700">
          Error al cargar el artículo
        </p>
      </div>
    );
  }

  if (!article) {
    toast.error('Artículo no encontrado');
    return (
      <div className="flex justify-center items-center min-h-[50vh]">
        <p className="text-xl font-semibold text-gray-700">
          Artículo no encontrado
        </p>
      </div>
    );
  }
  return (
    <>
      <PageHeader
        title="Editar artículo"
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
        initialValues={article}
        onSubmit={updateForm}
        isSubmitting={false}
      />
    </>
  );
}
