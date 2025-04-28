'use client';

import ArticleCard from '@/src/app/components/ArticleCard';
import PageHeader from '@/src/app/components/PageHeader';
import Spinner from '@/src/app/components/Spinner';
import { useGetArticles } from '@/src/hooks/useGetArticles';
import { GetArticle } from '@/src/schemas/article';
import Link from 'next/link';

export default function Author() {
  const { articles, isLoading } = useGetArticles();

  return (
    <>
      <PageHeader
        title="Artículos de Joaquín Vilchez"
        actions={
          <Link href="/" className="hover:underline">
            {' '}
            Ver todos los autores
          </Link>
        }
      />
      <div className="grid grid-cols-1">
        <div className="grid grid-cols-1">
          {isLoading ? (
            <Spinner />
          ) : (
            articles.map((article: GetArticle) => (
              <ArticleCard
                key={article._id}
                article={article}
                showAuthor={false}
              />
            ))
          )}
        </div>
      </div>
    </>
  );
}
