import { useQueryClient } from '@tanstack/react-query';

import { useTranslation } from 'react-i18next';
import { toast } from 'sonner';

import { $api } from '@/common/lib';

import { ApiPaths } from '../../models';

export function useCreateArticle() {
  const queryClient = useQueryClient();
  const { t } = useTranslation('admin');

  return $api.useMutation('post', ApiPaths.ArticleController_createArticle, {
    onSuccess: async () => {
      await Promise.all([
        queryClient.invalidateQueries({
          queryKey: ['get', ApiPaths.ArticleController_findArticles],
        }),
      ]);
    },
    onError: (error) => {
      if (error.statusCode === 400) {
        toast.error(t('error.badRequest', { ns: 'common' }));
      } else if (error.statusCode === 401) {
        toast.error(t('error.unauthorized', { ns: 'common' }));
      } else if (error.statusCode === 403) {
        toast.error(t('error.unauthorized', { ns: 'common' }));
      } else {
        toast.error(t('error.internalServerError', { ns: 'common' }));
      }
    },
  });
}
