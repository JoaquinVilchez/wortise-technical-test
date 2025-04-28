import { useQuery } from '@tanstack/react-query';
import { DbArticle } from '../schemas/article';

export function useGetArticle(id: string) {
  return useQuery<DbArticle>({
    queryKey: ['article', id],
    queryFn: async () => {
      const res = await fetch(`/api/articles/${id}`);
      if (!res.ok) {
        throw new Error('Error al obtener el artículo');
      }
      return res.json();
    },
  });
}
