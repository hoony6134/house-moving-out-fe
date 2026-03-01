import { useTranslation } from 'react-i18next';

export function ArticleListFrame() {
  const { t } = useTranslation('admin');

  return (
    <main className="flex flex-1 flex-col gap-4 p-4">
      <h1 className="text-title3 text-text-black font-semibold">{t('article.list.title')}</h1>
      <p className="text-body2 text-text-gray">{t('article.list.placeholder')}</p>
    </main>
  );
}
