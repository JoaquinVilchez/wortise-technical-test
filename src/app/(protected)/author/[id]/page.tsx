'use client';

import ArticleCard from '@/src/app/components/ArticleCard';
import PageHeader from '@/src/app/components/PageHeader';
import Link from 'next/link';

export default function Author() {
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
        <ArticleCard showAuthor={false} />
        <ArticleCard showAuthor={false} />
        <ArticleCard showAuthor={false} />
        <ArticleCard showAuthor={false} />
        <ArticleCard showAuthor={false} />
        <ArticleCard showAuthor={false} />
      </div>
    </>
  );
}
