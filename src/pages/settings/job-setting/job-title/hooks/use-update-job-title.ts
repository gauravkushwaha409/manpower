import { useUpdateDataMutation } from "@/api/api";
import { useUpdateModal } from "@/hooks/use-update-modal";
import useJobTitleDetails from "./use-job-title-details";
import {
  JobTitleSchemaType,
  JobTitleValidationSchema,
} from "../schema/job-title-schema";
import { useFormik } from "formik";
import { endpoints } from "@/api/endpoints";
import { apiTags } from "@/constant/tag";
import { ApiResponse } from "@/api/api.error";
import { handleResponse } from "@/utils/handleResponse";

const useUpdateJobTitle = () => {
  const { updateId, handleCloseModal } = useUpdateModal();
  const [updateJobTitle, { isLoading }] = useUpdateDataMutation();
  const { jobTitleDetails, isLoading: isInitialLoading } = useJobTitleDetails({
    id: updateId ?? "",
  });

  const initialValues: JobTitleSchemaType = {
    industry: jobTitleDetails?.data?.industry || "",
    category: jobTitleDetails?.data?.category || "",
    sub_category: jobTitleDetails?.data?.industry || "",
    job_title: jobTitleDetails?.data?.jobTitle || "",
    icon: jobTitleDetails?.data?.icon || "",
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

      const response = (await updateJobTitle({
        data: formData,
        url: endpoints.jobTitle.update.replace(":id", updateId ?? ""),
        invalidateTag: [apiTags.jobTitle.list, apiTags.jobTitle.details],
      })) as ApiResponse;
      handleResponse({
        response,
        setErrorCallBack: setErrors,
        handleOnSuccess: () => {
          resetForm();
          handleCloseModal();
        }
      });
    },
  });
  return { formik, isLoading, isInitialLoading };
};
export default useUpdateJobTitle;
