'use client';

import ArticleCard from '@/src/app/components/ArticleCard';
import Button from '@/src/app/components/Button';
import PageHeader from '@/src/app/components/PageHeader';
import Spinner from '@/src/app/components/Spinner';
import { useGetArticles } from '@/src/hooks/useGetArticles';
import { useGetAuthor } from '@/src/hooks/useGetAuthor';
import { GetArticle } from '@/src/schemas/article';
import Link from 'next/link';
import { useParams } from 'next/navigation';

export default function Author() {
  const { id } = useParams<{ id: string }>();
  const {
    articles,
    isLoading,
    search,
    setSearch,
    currentPage,
    totalPages,
    setPage,
  } = useGetArticles(id);
  const { author } = useGetAuthor(id);

  return (
    <>
      <PageHeader
        title={`Artículos de ${author?.name}`}
        actions={
          <Link href="/" className="hover:underline">
            {' '}
            Ver todos los autores
          </Link>
        }
      />
      <form className="mb-8">
        <input
          type="text"
          placeholder="Buscar..."
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
            setPage(1);
          }}
          className="w-full p-2 border border-gray-300 rounded-lg px-4"
        />
      </form>
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
      <div className="flex justify-center gap-2 mt-10">
        <Button
          disabled={currentPage === 1}
          onClick={() => setPage(currentPage - 1)}
        >
          Anterior
        </Button>
        <Button
          disabled={currentPage === totalPages}
          onClick={() => setPage(currentPage + 1)}
        >
          Siguiente
        </Button>
      </div>
    </>
  );
}
