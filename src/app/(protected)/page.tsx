import AuthorCard from '../components/AuthorCard';

export default function Dashboard() {
  return (
    <div className="mt-5 mx-auto px-4">
      <h1 className="text-4xl font-bold mb-8">Autores</h1>

      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
        <AuthorCard />
        <AuthorCard />
        <AuthorCard />
        <AuthorCard />
        <AuthorCard />
        <AuthorCard />
        <AuthorCard />
        <AuthorCard />
        <AuthorCard />
        <AuthorCard />
        <AuthorCard />
        <AuthorCard />
      </div>
    </div>
  );
}
