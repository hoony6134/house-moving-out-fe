import { createFileRoute } from '@tanstack/react-router';

import { EditArticleFrame } from '@/features/admin';

export const Route = createFileRoute('/admin/articles/$uuid/edit')({
  component: EditArticleFrame,
});
