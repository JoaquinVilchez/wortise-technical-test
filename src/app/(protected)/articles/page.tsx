import ArticleCard from '../../components/ArticleCard';
import Button from '../../components/Button';

export default function Articles() {
  return (
    <div className="mt-5 mx-auto px-4">
      <div className="mb-4">
        <div className="flex justify-between items-center mt-10 mb-5">
          <h1 className="text-4xl font-bold">Artículos</h1>
          <Button href="/articles/new">Nuevo Artículo</Button>
        </div>
        <form>
          <input
            type="text"
            placeholder="Buscar..."
            className="w-full p-2 border border-gray-300 rounded-lg mb-5 px-4"
          />
        </form>
      </div>
      <div className="grid grid-cols-1">
        <ArticleCard />
        <ArticleCard />
        <ArticleCard />
        <ArticleCard />
        <ArticleCard />
        <ArticleCard />
      </div>
    </div>
  );
}
