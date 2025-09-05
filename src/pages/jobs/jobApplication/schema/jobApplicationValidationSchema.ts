import * as Yup from 'yup';

export const jobApplicationValidation = Yup.object().shape({
  candidate_name: Yup.string()
    .required('Candidate Name is required')
    .min(3, 'Candidate Name must be at least 3 characters'),
  country: Yup.string().required('Country is required'),
  company_name: Yup.string()
    .required('Company Name is required')
    .min(2, 'Company Name must be at least 2 characters'),
  job_vacancy: Yup.string().required('Job Vacancy is required'),
  status: Yup.string().required('Status is required'),
  description: Yup.string()
    .required('Remarks is required')
    .max(500, 'Remarks cannot exceed 500 characters'),
});

export type JobApplicationValidationSchemaType = Yup.InferType<
  typeof jobApplicationValidation
>;
