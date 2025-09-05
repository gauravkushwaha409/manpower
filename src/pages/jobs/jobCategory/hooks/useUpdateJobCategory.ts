import { useGetDataQuery, useUpdateDataMutation } from '@/api/api';
import { useFormik } from 'formik';
import { IJobCategory } from '@/pages/jobs/jobCategory/interface/IJobCategory.ts';
import { jobCategoryValidation } from '../schema/jobCategoryValidationSchema';

const useUpdateJobCategory = () => {
  const [
    updateJobCategory,
    {
      isError: isUpdateJobCategoryError,
      isLoading: isUpdateJobCategoryLoading,
      isSuccess: isUpdateJobCategorySuccess,
    },
  ] = useUpdateDataMutation();

  const {
    data,
    isError: isGetJobCategoryDetailsError,
    isLoading: isGetJobCategoryDetailsLoading,
    isSuccess: isGetJobCategoryDetailsSuccess,
  } = useGetDataQuery({ url: '', params: {}, tag: '' });

  const initial: any = data;

  const initialValues: IJobCategory = {
    id: initial?.id || '',
    title: initial?.title || '',
    description: initial?.description || '',
  };

  const formik = useFormik({
    initialValues,
    validationSchema: jobCategoryValidation,
    enableReinitialize: true,
    onSubmit: async (values) => {
      updateJobCategory({
        data: values,
        url: '',
        invalidateTag: '',
      });
    },
  });

  return {
    data,
    formik,
    isGetJobCategoryDetailsError,
    isGetJobCategoryDetailsLoading,
    isGetJobCategoryDetailsSuccess,
    isUpdateJobCategorySuccess,
    isUpdateJobCategoryLoading,
    isUpdateJobCategoryError,
  };
};

export default useUpdateJobCategory;
