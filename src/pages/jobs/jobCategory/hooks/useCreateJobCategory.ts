import { useFormik } from 'formik';
import { usePostDataMutation } from '@/api/api';
import { IJobCategory } from '@/pages/jobs/jobCategory/interface/IJobCategory.ts';
import { jobCategoryValidation } from '../schema/jobCategoryValidationSchema';

const useCreateJobCategory = () => {
  const [
    createCompany,
    {
      isError: isJobCategoryError,
      isLoading: isJobCategoryLoading,
      isSuccess: isJobCategorySuccess,
    },
  ] = usePostDataMutation();

  const initialValues: IJobCategory = {
    id: '',
    title: '',
    description: '',
  };

  const formik = useFormik({
    initialValues,
    validationSchema: jobCategoryValidation,
    onSubmit: async (values) => {
      createCompany({
        url: '',
        data: values,
        invalidateTag: '',
      });
    },
  });

  return {
    formik,
    isJobCategoryError,
    isJobCategoryLoading,
    isJobCategorySuccess,
  };
};

export default useCreateJobCategory;
