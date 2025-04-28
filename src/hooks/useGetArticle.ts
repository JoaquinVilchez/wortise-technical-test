import { useQuery } from '@tanstack/react-query';
import { GetArticle } from '../schemas/article';

export function useGetArticle(id: string) {
  return useQuery<GetArticle>({
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
