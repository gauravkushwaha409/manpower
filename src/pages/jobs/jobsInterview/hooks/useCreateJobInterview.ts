import { useFormik } from 'formik';
import { usePostDataMutation } from '@/api/api';
import { IJobInterview } from '../interface/IJobInterview';
import { jobInterviewValidation } from '../schema/jobsInterviewValidationSchema';

const useCreateJobInterview = () => {
  const [
    createJobInterview,
    {
      isError: isJobInterviewError,
      isLoading: isJobInterviewLoading,
      isSuccess: isJobInterviewSuccess,
    },
  ] = usePostDataMutation();

  const initialValues: IJobInterview = {
    id: '',
    company_name: '',
    candidate_name: '',
    job_vacancy: '',
    interviewer: '',
    salary_offered: '',
    interview_date_time: '',
    status: '',
    remarks: '',
  };

  const formik = useFormik({
    initialValues,
    validationSchema: jobInterviewValidation,
    onSubmit: async (values) => {
      createJobInterview({
        url: '',
        data: values,
        invalidateTag: '',
      });
    },
  });

  return {
    formik,
    isJobInterviewError,
    isJobInterviewLoading,
    isJobInterviewSuccess,
  };
};

export default useCreateJobInterview;
