import { useEffect } from 'react';

import { useTranslation } from 'react-i18next';
import { toast } from 'sonner';

import { $api } from '@/common/lib';

import { ApiPaths, type ArticleType } from '../../models';

export function useFindArticles({
  type,
  offset,
  limit,
}: {
  type: ArticleType;
  offset?: number;
  limit?: number;
}) {
  const { t } = useTranslation('admin');
  const { data, error, isError, isLoading } = $api.useQuery(
    'get',
    ApiPaths.ArticleController_findArticles,
    {
      params: {
        query: {
          offset,
          limit,
          type,
        },
      },
    },
  );

  useEffect(() => {
    if (!isError) return;
    if (error.statusCode === 401 || error.statusCode === 403) {
      toast.error(t('error.unauthorized', { ns: 'common' }));
      return;
    }
    if (error.statusCode === 400) {
      toast.error(t('error.badRequest', { ns: 'common' }));
      return;
    }
    toast.error(t('error.internalServerError', { ns: 'common' }));
  }, [error, isError, t]);

  return {
    data: data?.articles ?? [],
    totalCount: data?.totalCount ?? 0,
    isLoading,
  };
}
