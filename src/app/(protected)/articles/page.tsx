import ArticleCard from '../../components/ArticleCard';

export default function Dashboard() {
  return (
    <div className="mt-5 mx-auto px-4">
      <div className="mb-4">
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-4xl font-bold">Artículos</h1>
          <button className="text-sm cursor-pointer bg-blue-500 hover:bg-blue-400 transition text-white px-4 py-2 rounded-lg ">
            Crear Artículo
          </button>
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
