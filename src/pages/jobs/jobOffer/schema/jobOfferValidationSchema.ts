import * as Yup from 'yup';

export const JobOfferValidation = Yup.object().shape({
  candidate_name: Yup.string()
    .required('Candidate Name is required')
    .min(3, 'Candidate Name must be at least 3 characters'),
  company_name: Yup.string()
    .required('Company Name is required')
    .min(3, 'Company Name must be at least 3 characters'),

  job_vacancy: Yup.string().required('Job Vacancy is required'),

  salary_offered: Yup.number()
    .required('Salary Offered is required')
    .positive('Salary must be a positive number')
    .integer('Salary must be a whole number'),

  offer_date: Yup.date()
    .required('Offer Date is required')
    .typeError('Invalid date format'),

  start_date: Yup.date()
    .required('Start Date is required')
    .min(Yup.ref('offer_date'), 'Start Date cannot be before Offer Date')
    .typeError('Invalid date format'),

  status: Yup.string()
    .required('Status is required')
    .oneOf(['Pending', 'Accepted', 'Rejected'], 'Invalid status'),
});

export type JobValidationSchemaType = Yup.InferType<typeof JobOfferValidation>;
