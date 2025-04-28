import { GetAuthor } from '@/src/schemas/author';
import Image from 'next/image';
import Link from 'next/link';

interface AuthorCardProps {
  author: GetAuthor;
}

export default function AuthorCard({ author }: AuthorCardProps) {
  return (
    <Link
      href={`author/${author._id}`}
      className="flex flex-col items-center justify-between p-4 mb-5 max-w-40 min-h-50 bg-white hover:bg-gray-50 rounded-lg shadow-md cursor-pointer hover:shadow-lg transform hover:scale-105 transition-transform duration-200 ease-in-out"
    >
      <Image
        src="/avatar.svg"
        width={96}
        height={96}
        alt="Author"
        className="w-24 h-24 rounded-full mb-3"
      />
      <div>
        <h2 className="text-xl font-semibold text-center leading-5 mb-2 px-5">
          {author.name}
        </h2>
        <p className="text-gray-600 text-xs text-center">54 Artículos</p>
      </div>
    </Link>
  );
}
