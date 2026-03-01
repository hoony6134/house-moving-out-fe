import { Link } from '@tanstack/react-router';

import { useTranslation } from 'react-i18next';

import { Button } from '@/common/components';

export function AdminLandingFrame() {
  const { t } = useTranslation('admin');
  return (
    <div className="flex flex-col gap-2 p-4">
      <Button asChild>
        <Link to="/admin/schedules">{t('schedule.list')}</Link>
      </Button>
      <Button asChild variant="outline">
        <Link to="/admin/articles">{t('article.list.nav')}</Link>
      </Button>
    </div>
  );
}
