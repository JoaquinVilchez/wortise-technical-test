'use client';

import ArticleForm from '@/src/app/components/forms/ArticleForm';
import { Article } from '@/src/schemas/article';

export default function CreateArticle() {
  const createArticle = (data: Article) => {
    console.log('CREAR ARTÍCULO', data);
  };
  return (
    <div className="mt-5 mx-auto px-4">
      <h1 className="text-4xl font-bold mb-8">Nuevo artículo</h1>
      <ArticleForm onSubmit={createArticle} />
    </div>
  );
}
