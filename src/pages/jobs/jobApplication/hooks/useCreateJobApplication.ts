import { useFormik } from 'formik';
import { usePostDataMutation } from '@/api/api';
import { IJobApplication } from '../interface/IJobApplication';
import { jobApplicationValidation } from '../schema/jobApplicationValidationSchema';

const useCreateJobApplication = () => {
  const [
    createJobApplicant,
    {
      isError: isJobApplicantError,
      isLoading: isJobApplicantLoading,
      isSuccess: isJobApplicantSuccess,
    },
  ] = usePostDataMutation();

  // Inital value
  const initialValues: IJobApplication = {
    id: '',
    title: '',
    candidate_name: '',
    country: '',
    company_name: '',
    job_vacancy: '',
    status: '',
    description: '',
  };

  const formik = useFormik({
    initialValues,
    validationSchema: jobApplicationValidation,
    onSubmit: async (values) => {
      createJobApplicant({
        url: '',
        data: values,
        invalidateTag: '',
      });
    },
  });

  return {
    formik,
    isJobApplicantError,
    isJobApplicantLoading,
    isJobApplicantSuccess,
  };
};

export default useCreateJobApplication;
