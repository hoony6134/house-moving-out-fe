import { createFileRoute } from '@tanstack/react-router';

import { CreateArticleFrame } from '@/features/admin';

export const Route = createFileRoute('/admin/articles/new')({
  component: CreateArticleFrame,
});
