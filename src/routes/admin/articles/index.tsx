import { createFileRoute } from '@tanstack/react-router';

import { ArticleListFrame } from '@/features/admin';

export const Route = createFileRoute('/admin/articles/')({
  component: ArticleListFrame,
});
