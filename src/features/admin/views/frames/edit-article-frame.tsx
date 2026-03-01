import { Link, useParams } from '@tanstack/react-router';

import { useTranslation } from 'react-i18next';

import { Button, Loading } from '@/common/components';

import { useFindArticle } from '../../viewmodels';

export function EditArticleFrame() {
  const { t } = useTranslation('admin');
  const { uuid } = useParams({ from: '/admin/articles/$uuid/edit' });
  const { data, isLoading, isNotFound } = useFindArticle(uuid);

  if (isLoading) return <Loading containerClassName="h-full" />;
  if (isNotFound || !data) return <div className="p-4">{t('article.edit.notFound')}</div>;

  return (
    <main className="flex flex-1 flex-col gap-4 p-4">
      <div className="flex items-center justify-between">
        <h1 className="text-title3 text-text-black font-semibold">{t('article.edit.title')}</h1>
        <Button asChild variant="outline">
          <Link to="/admin/articles">{t('article.edit.back')}</Link>
        </Button>
      </div>
      <p className="text-body2 text-text-gray">{t('article.edit.placeholder')}</p>
      <div className="bg-bg-white rounded-xl border border-gray-200 p-4">
        <div className="text-sub2 text-text-black mb-2">{t('article.edit.preview')}</div>
        <div className="text-body2 text-text-gray mb-1">{data.titleKo}</div>
        <div className="text-body2 text-text-gray">{data.titleEn}</div>
      </div>
    </main>
  );
}
