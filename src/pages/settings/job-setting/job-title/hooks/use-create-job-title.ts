import { usePostDataMutation } from "@/api/api";
import { useAddModal } from "@/hooks/add-modal";
import {
  JobTitleSchemaType,
  JobTitleValidationSchema,
} from "../schema/job-title-schema";
import { useFormik } from "formik";
import { endpoints } from "@/api/endpoints";
import { apiTags } from "@/constant/tag";
import { ApiResponse } from "@/api/api.error";
import { handleResponse } from "@/utils/handleResponse";

const useCreateJobTitle = () => {
  const [createJobTitle, { isLoading }] = usePostDataMutation();
  const { handleCloseModal } = useAddModal();
  const initialValues: JobTitleSchemaType = {
    industry: "",
    category: "",
    sub_category: "",
    job_title: "",
    icon: undefined,
  };

  const formik = useFormik<JobTitleSchemaType>({
    initialValues,
    validationSchema: JobTitleValidationSchema,
    onSubmit: async (values, { setErrors, resetForm }) => {
      const formData = new FormData();
      formData.append("industry", values.industry);
      formData.append("category", values.category);
      formData.append("sub_category", values.sub_category);
      formData.append("job_title", values.job_title);
      if (values?.icon && values?.icon instanceof File)
        formData.append("icon", values.icon);

      const response = (await createJobTitle({
        url: endpoints.jobTitle.create,
        data: formData,
        invalidateTag: [apiTags.jobTitle.list],
      })) as ApiResponse;
      handleResponse({
        response,
        setErrorCallBack: setErrors,
        handleCloseModal,
        resetForm: resetForm,
      });
    },
  });

  return { formik, isLoading };
};
export default useCreateJobTitle;
