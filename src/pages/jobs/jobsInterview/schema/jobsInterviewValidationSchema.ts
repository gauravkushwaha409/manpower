import * as Yup from 'yup';

export const jobInterviewValidation = Yup.object().shape({
  company_name: Yup.string()
    .required('Company Name is required')
    .min(3, 'Company Name must be at least 3 characters'),
  candidate_name: Yup.string()
    .required('Candidate Name is required')
    .min(3, 'Candidate Name must be at least 3 characters'),
  job_vacancy: Yup.string().required('Job Vacancy is required'),
  interviewer: Yup.string().required('Interviewer name is required'),
  salaryOffered: Yup.string().required('Salary Offered is required'),
  date: Yup.date()
    .required('Date is required')
    .typeError('Invalid date format'),
  time: Yup.string()
    .required('Time is required')
    .matches(
      /^([0-1]?[0-9]|2[0-3]):[0-5][0-9]$/,
      'Time must be in HH:mm format'
    ),
  status: Yup.string()
    .required('Status is required')
    .oneOf(['Pending', 'Accepted', 'Rejected'], 'Invalid status'),
  remarks: Yup.string(),
});

export type JobInterviewValidationSchemaType = Yup.InferType<
  typeof jobInterviewValidation
>;
