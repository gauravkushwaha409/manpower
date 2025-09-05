import { useGetDataQuery, useUpdateDataMutation } from '@/api/api';
import { useFormik } from 'formik';
import { IJobApplication } from '../interface/IJobApplication';
import { jobApplicationValidation } from '../schema/jobApplicationValidationSchema';

const useUpdateJobApplication = () => {
  const [
    updateJobApplicant,
    {
      isError: isUpdateJobApplicantError,
      isLoading: isUpdateJobApplicantLoading,
      isSuccess: isUpdateJobApplicantSuccess,
    },
  ] = useUpdateDataMutation();

  // Get Initial Data
  const {
    data,
    isError: isGetJobApplicantDetailsError,
    isLoading: isGetJobApplicantDetailsLoading,
    isSuccess: isGetJobApplicantDetailsSuccess,
  } = useGetDataQuery({ url: '', params: {}, tag: '' });

  const initial: IJobApplication = data;

  const initialValues: IJobApplication = {
    id: initial?.id || '',
    title: initial?.title || '',
    candidate_name: initial?.candidate_name || '',
    country: initial?.country || '',
    company_name: initial?.company_name || '',
    job_vacancy: initial?.job_vacancy || '',
    status: initial?.status || '',
    description: initial?.description || '',
  };

  const formik = useFormik({
    initialValues,
    validationSchema: jobApplicationValidation,
    enableReinitialize: true,
    onSubmit: async (values) => {
      updateJobApplicant({
        data: values,
        url: '',
        invalidateTag: '',
      });
    },
  });

  return {
    data,
    formik,
    isGetJobApplicantDetailsError,
    isGetJobApplicantDetailsLoading,
    isGetJobApplicantDetailsSuccess,
    isUpdateJobApplicantSuccess,
    isUpdateJobApplicantLoading,
    isUpdateJobApplicantError,
  };
};

export default useUpdateJobApplication;
