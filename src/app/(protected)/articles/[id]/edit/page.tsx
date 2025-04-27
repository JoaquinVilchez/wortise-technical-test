'use client';

import ArticleForm from '@/src/app/components/forms/ArticleForm';
import PageHeader from '@/src/app/components/PageHeader';
import { Article } from '@/src/schemas/article';
import { ChevronLeft } from 'lucide-react';
import Link from 'next/link';

export default function EditArticle() {
  const article: Article = {
    title: 'Título del artículo',
    imageUrl: 'https://example.com/image.jpg',
    body: 'Texto del artículo',
    createdAt: new Date(),
  };

  const updateForm = (data: Partial<Article>) => {
    console.log('EDITAR FORMULARIO', data);
  };
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
