import * as Yup from 'yup';

export const jobCategoryValidation = Yup.object().shape({
  title: Yup.string()
    .required('Job title is required')
    .min(2, 'Job title must be at least 2 characters')
    .max(100, 'Job title must be less than 100 characters'),

  description: Yup.string()
    .required('Job description is required')
    .min(10, 'Job description must be at least 10 characters')
    .max(1000, 'Job description must be less than 1000 characters'),
});

export type JobCategoryValidationSchemaType = Yup.InferType<
  typeof jobCategoryValidation
>;
