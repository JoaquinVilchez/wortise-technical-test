import ArticleCard from '../../components/ArticleCard';
import Button from '../../components/Button';
import PageHeader from '../../components/PageHeader';

export default function Articles() {
  return (
    <>
      <PageHeader
        title="Artículos"
        actions={<Button href="/articles/new">Nuevo Artículo</Button>}
      />
      <form>
        <input
          type="text"
          placeholder="Buscar..."
          className="w-full p-2 border border-gray-300 rounded-lg mb-10 px-4"
        />
      </form>
      <div className="grid grid-cols-1">
        <ArticleCard />
        <ArticleCard />
        <ArticleCard />
        <ArticleCard />
        <ArticleCard />
        <ArticleCard />
      </div>
    </>
  );
}
