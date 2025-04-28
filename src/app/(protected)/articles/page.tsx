'use client';

import { useArticles } from '@/src/hooks/useArticles';
import ArticleCard from '../../components/ArticleCard';
import Button from '../../components/Button';
import PageHeader from '../../components/PageHeader';
import Spinner from '../../components/Spinner';

export default function Articles() {
  const {
    articles,
    isLoading,
    search,
    setSearch,
    currentPage,
    totalPages,
    setPage,
  } = useArticles();

  return (
    <>
      <PageHeader
        title="Artículos"
        actions={<Button href="/articles/new">Nuevo Artículo</Button>}
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
        {isLoading ? (
          <Spinner />
        ) : (
          articles.map((article) => (
            <ArticleCard key={article._id} article={article} />
          ))
        )}
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
