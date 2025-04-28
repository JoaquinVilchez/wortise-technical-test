'use client';

import { useGetAuthors } from '@/src/hooks/useGetAuthors';
import { GetAuthor } from '@/src/schemas/author';
import AuthorCard from '../components/AuthorCard';
import PageHeader from '../components/PageHeader';
import Spinner from '../components/Spinner';

export default function Dashboard() {
  const { authors, isLoading } = useGetAuthors();
  return (
    <>
      <PageHeader title="Autores" />
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
        {isLoading ? (
          <Spinner />
        ) : (
          authors.map((author: GetAuthor) => (
            <AuthorCard key={author._id} author={author} />
          ))
        )}
      </div>
    </>
  );
}
