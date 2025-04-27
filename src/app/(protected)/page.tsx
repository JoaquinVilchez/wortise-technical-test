import AuthorCard from '../components/AuthorCard';
import PageHeader from '../components/PageHeader';

export default function Dashboard() {
  return (
    <>
      <PageHeader title="Autores" />
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
        <AuthorCard authorId={1} />
        <AuthorCard authorId={1} />
        <AuthorCard authorId={1} />
        <AuthorCard authorId={1} />
        <AuthorCard authorId={1} />
        <AuthorCard authorId={1} />
        <AuthorCard authorId={1} />
        <AuthorCard authorId={1} />
        <AuthorCard authorId={1} />
        <AuthorCard authorId={1} />
        <AuthorCard authorId={1} />
        <AuthorCard authorId={1} />
      </div>
    </>
  );
}
