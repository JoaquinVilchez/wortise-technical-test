'use client';

import ArticleForm from '@/src/app/components/forms/ArticleForm';
import { Article } from '@/src/schemas/article';

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
    <div className="mt-5 mx-auto px-4">
      <h1 className="text-4xl font-bold mt-10 mb-5">Editar artículo</h1>
      <ArticleForm
        initialValues={article}
        onSubmit={updateForm}
        isSubmitting={false}
      />
    </div>
  );
}
