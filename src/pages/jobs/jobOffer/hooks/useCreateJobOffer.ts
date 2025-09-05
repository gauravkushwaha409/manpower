import { useFormik } from 'formik';
import { usePostDataMutation } from '@/api/api';
import { IJobOffer } from '../interface/IJobOffer';
import { JobOfferValidation } from '../schema/jobOfferValidationSchema';

const useCreateJobOffer = () => {
  const [
    createJobOffer,
    {
      isError: isJobOfferError,
      isLoading: isJobOfferLoading,
      isSuccess: isJobOfferSuccess,
    },
  ] = usePostDataMutation();

  const initialValues: IJobOffer = {
    id: '',
    candidate_name: '',
    company_name: '',
    job_vacancy: '',
    salary_offered: '',
    offer_date: '',
    start_date: '',
    status: '',
  };

  const formik = useFormik({
    initialValues,
    validationSchema: JobOfferValidation,
    onSubmit: async (values) => {
      createJobOffer({
        url: '',
        data: values,
        invalidateTag: '',
      });
    },
  });

  return {
    formik,
    isJobOfferError,
    isJobOfferLoading,
    isJobOfferSuccess,
  };
};

export default useCreateJobOffer;
