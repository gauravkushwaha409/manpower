import { useGetDataQuery, useUpdateDataMutation } from '@/api/api';
import { useFormik } from 'formik';
import { IJobOffer } from '../interface/IJobOffer';
import { JobOfferValidation } from '../schema/jobOfferValidationSchema';

const useUpdateJobOffer = () => {
  const [
    updateJobOffer,
    {
      isError: isUpdateJobOfferError,
      isLoading: isUpdateJobOfferLoading,
      isSuccess: isUpdateJobOfferSuccess,
    },
  ] = useUpdateDataMutation();

  // Get Initial Data
  const {
    data,
    isError: isGetJobOfferDetailsError,
    isLoading: isGetJobOfferDetailsLoading,
    isSuccess: isGetJobOfferDetailsSuccess,
  } = useGetDataQuery({ url: '', params: {}, tag: '' });

  const initial: IJobOffer = data;

  const initialValues: IJobOffer = {
    id: initial?.id || '',
    candidate_name: initial?.candidate_name || '',
    company_name: initial?.company_name || '',
    job_vacancy: initial?.job_vacancy || '',
    salary_offered: initial?.salary_offered || '',
    offer_date: initial?.offer_date || '',
    start_date: initial?.start_date || '',
    status: initial?.status || '',
  };

  const formik = useFormik({
    initialValues,
    validationSchema: JobOfferValidation,
    enableReinitialize: true,
    onSubmit: async (values) => {
      updateJobOffer({
        data: values,
        url: '',
        invalidateTag: '',
      });
    },
  });

  return {
    data,
    formik,
    isGetJobOfferDetailsError,
    isGetJobOfferDetailsLoading,
    isGetJobOfferDetailsSuccess,
    isUpdateJobOfferSuccess,
    isUpdateJobOfferLoading,
    isUpdateJobOfferError,
  };
};

export default useUpdateJobOffer;
