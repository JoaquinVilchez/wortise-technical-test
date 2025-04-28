'use client';

import { Article } from '@/src/schemas/article';
import { useForm } from 'react-hook-form';
import Button from '../Button';
import FormErrorMessage from './ui/FormErrorMessage';

interface ArticleFormProps {
  initialValues?: Partial<Article>;
  onSubmit: (data: Article) => void;
  isSubmitting?: boolean;
}

export default function ArticleForm({
  initialValues = {},
  onSubmit,
  isSubmitting,
}: ArticleFormProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Article>({
    defaultValues: initialValues,
  });

  return (
    <div>
      <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label htmlFor="title">Título</label>
            <input
              type="text"
              id="title"
              {...register('title')}
              placeholder="Ingrese el título del artículo"
              className="mt-1 block w-full rounded-md px-4 py-2 border border-gray-300"
              disabled={isSubmitting}
            />
            <FormErrorMessage message={errors.title?.message} />
          </div>

          <div>
            <label htmlFor="imageUrl">Imágen de portada</label>
            <input
              type="text"
              id="imageUrl"
              {...register('imageUrl')}
              placeholder="Ingrese la URL de la imagen"
              className="mt-1 block w-full rounded-md px-4 py-2 border border-gray-300"
              disabled={isSubmitting}
            />
            <FormErrorMessage message={errors.imageUrl?.message} />
          </div>
        </div>

        <div className="grid grid-cols-1">
          <div>
            <label htmlFor="body">Cuerpo del artículo</label>
            <textarea
              id="body"
              {...register('body')}
              placeholder="Escriba el cuerpo del artículo aquí"
              className="mt-1 block w-full rounded-md px-4 py-2 border border-gray-300"
              rows={15}
              disabled={isSubmitting}
            />
            <FormErrorMessage message={errors.body?.message} />
          </div>
        </div>

        <Button type="submit" isLoading={isSubmitting} className="w-full">
          {initialValues?.title ? 'Actualizar Artículo' : 'Crear Artículo'}
        </Button>
      </form>
    </div>
  );
}
