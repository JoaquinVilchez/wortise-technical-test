'use client';

import Spinner from '@/src/app/components/Spinner';
import { useGetArticle } from '@/src/hooks/useGetArticle';
import Image from 'next/image';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { toast } from 'react-toastify';

export default function Article() {
  const { id } = useParams<{ id: string }>();
  const { data: article, isLoading, error } = useGetArticle(id);

  if (isLoading) {
    return <Spinner />;
  }

  if (error) {
    toast.error('Error al cargar el artículo');
    return (
      <div className="flex justify-center items-center min-h-[50vh]">
        <p className="text-xl font-semibold text-gray-700">
          Error al cargar el artículo
        </p>
      </div>
    );
  }

  if (!article) {
    toast.error('Artículo no encontrado');
    return (
      <div className="flex justify-center items-center min-h-[50vh]">
        <p className="text-xl font-semibold text-gray-700">
          Artículo no encontrado
        </p>
      </div>
    );
  }

  return (
    <>
      <div className="relative">
        <Image
          src={article.imageUrl}
          className="w-full object-cover rounded-lg h-30 md:h-80"
          width={1080}
          height={720}
          alt="Imagen de un tren"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/100 via-transparent to-transparent rounded-lg" />

        <p className="absolute bottom-0 w-full text-white text-2xl md:text-4xl font-bold px-10 pb-4">
          {article.title}
        </p>
      </div>
      <div>
        <div className="flex justify-between items-center my-5 text-sm text-gray-800">
          <p>
            Publicado el{' '}
            {article.createdAt
              ? new Date(article.createdAt).toLocaleDateString('es-AR', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                })
              : 'Fecha desconocida'}
          </p>
          <div>
            <Link href="/author/1" className="flex items-center gap-2">
              <Image
                src="/avatar.svg"
                width={25}
                height={25}
                alt=""
                className="object-cover"
              />
              <p className="hover:underline">Joaquín Vilchez</p>
            </Link>
          </div>
        </div>
        <hr />
      </div>
      <p className="text-gray-700 text-sm px-10 my-5">{article.body}</p>
      <hr className="mb-5" />
    </>
  );
}
