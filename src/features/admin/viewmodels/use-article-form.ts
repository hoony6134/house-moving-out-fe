import { useEffect } from 'react';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm, useWatch } from 'react-hook-form';
import { z } from 'zod';

import { ArticleType } from '../models';

const schema = z.object({
  type: z.enum(ArticleType),
  isVisible: z.boolean(),
  titleKo: z.string().trim().min(1),
  titleEn: z.string().trim().min(1),
  contentKo: z.string().trim().min(1),
  contentEn: z.string().trim().min(1),
});

export type ArticleFormValues = z.infer<typeof schema>;

const DEFAULT_VALUES: ArticleFormValues = {
  type: ArticleType.NOTICE,
  isVisible: true,
  titleKo: '',
  titleEn: '',
  contentKo: '',
  contentEn: '',
};

export type ArticleInitialValues = Partial<ArticleFormValues>;

export const useArticleForm = ({ initialValues }: { initialValues?: ArticleInitialValues }) => {
  const {
    register,
    formState: { errors, isSubmitting },
    handleSubmit,
    reset,
    setValue,
    control,
  } = useForm<ArticleFormValues>({
    resolver: zodResolver(schema),
    defaultValues: DEFAULT_VALUES,
  });

  useEffect(() => {
    if (!initialValues) return;
    reset({ ...DEFAULT_VALUES, ...initialValues });
  }, [initialValues, reset]);

  const type = useWatch({ name: 'type', control });
  const isVisible = useWatch({ name: 'isVisible', control });

  return {
    register,
    handleSubmit,
    setValue,
    control,
    errors,
    isSubmitting,
    type,
    isVisible,
  };
};
