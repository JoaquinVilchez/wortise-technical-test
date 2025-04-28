'use client';

import { useClickOutside } from '@/src/hooks/useClickOutside';
import { DbArticle } from '@/src/schemas/article';
import { MoreVertical } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import Modal from './Modal';

interface ArticleCardProps {
  article: DbArticle;
  showAuthor?: boolean;
}

export default function ArticleCard({
  article,
  showAuthor = true,
}: ArticleCardProps) {
  const [openOptions, setOpenOptions] = useState(false);
  const optionsRef = useClickOutside(() => setOpenOptions(false));
  const [openModal, setOpenModal] = useState(false);

  return (
    <>
      <div className="relative flex flex-col p-4 mb-5 bg-gray-50 hover:bg-gray-100 rounded-lg shadow-md hover:shadow-lg transform hover:scale-[1.01] transition-transform duration-200 ease-in-out">
        <div className="absolute right-2">
          <button
            onClick={() => setOpenOptions((prev) => !prev)}
            className="text-gray-500 hover:text-gray-700 p-2 rounded-full hover:bg-gray-200 transition-colors"
          >
            <MoreVertical size={20} />
          </button>
        </div>
        {openOptions && (
          <div
            ref={optionsRef}
            className="absolute right-4 top-12 bg-gray-50 border border-gray-300 rounded-lg shadow-xl text-sm z-20 p-2 w-40 animate-fade-in"
            role="menu"
          >
            <ul className="flex flex-col">
              <Link
                href={`/articles/${article._id}`}
                className="flex w-full items-center gap-2 rounded-lg px-4 py-2 text-sm text-gray-800 hover:bg-gray-100 cursor-pointer"
              >
                Ver artículo
              </Link>
              <Link
                href={`/articles/${article._id}/edit`}
                className="flex w-full items-center gap-2 rounded-lg px-4 py-2 text-sm text-gray-800 hover:bg-gray-100 cursor-pointer"
              >
                Editar
              </Link>
              <li
                className="flex w-full items-center gap-2 rounded-lg px-4 py-2 text-sm text-red-700 hover:bg-red-100 cursor-pointer"
                onClick={() => {
                  setOpenOptions(false);
                  setOpenModal(true);
                }}
              >
                Eliminar
              </li>
            </ul>
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 pr-8">
          <Image
            src={article.imageUrl}
            className="w-full object-cover rounded-lg h-30 md:h-70
          "
            width={1080}
            height={720}
            alt="Imagen de un tren"
          />
          <div className="md:pl-5 flex flex-col justify-between mt-3">
            <div>
              <p className="text-xl md:text-3xl font-bold mb-1">
                {article.title}
              </p>
              <p className="text-gray-500 text-sm md:ml-1 mb-3">
                {article.body.length > 200
                  ? article.body.slice(0, 400) + '...'
                  : article.body}
              </p>
            </div>
            {showAuthor && (
              <div className="flex items-center gap-2 mt-2 md:justify-end">
                <Link
                  href="/author/1"
                  className="md:mb-2 mr-4 flex items-center gap-2"
                >
                  <p className="text-xs w-10 leading-3 hover:underline">
                    Joaquín Vilchez
                  </p>
                  <Image
                    src="/avatar.svg"
                    width={25}
                    height={25}
                    alt=""
                    className="object-cover"
                  />
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>

      <Modal
        isOpen={openModal}
        onClose={() => setOpenModal(false)}
        onConfirm={() => {
          console.log('Artículo eliminado');
          setOpenModal(false);
        }}
        title="Eliminar Artículo"
        description="¿Estás seguro que querés eliminar este artículo? Esta acción no se puede deshacer."
        confirmText="Eliminar"
        cancelText="Cancelar"
      />
    </>
  );
}
