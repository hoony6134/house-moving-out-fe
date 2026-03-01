import { Link } from '@tanstack/react-router';

import { useTranslation } from 'react-i18next';

import { Button } from '@/common/components';

export function CreateArticleFrame() {
  const { t } = useTranslation('admin');

  return (
    <main className="flex flex-1 flex-col gap-4 p-4">
      <div className="flex items-center justify-between">
        <h1 className="text-title3 text-text-black font-semibold">{t('article.create.title')}</h1>
        <Button asChild variant="outline">
          <Link to="/admin/articles">{t('article.create.back')}</Link>
        </Button>
      </div>
      <p className="text-body2 text-text-gray">{t('article.create.placeholder')}</p>
    </main>
  );
}
