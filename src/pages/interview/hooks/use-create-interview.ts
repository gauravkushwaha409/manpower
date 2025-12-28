import { useFormik } from "formik";
import { usePostDataMutation } from "@/api/api";
import { apiTags } from "@/constant/tag";
import { endpoints } from "@/api/endpoints";
import { ApiResponse } from "@/api/api.error";
import { handleResponse } from "@/utils/handleResponse";
import { useAddModal } from "@/hooks/add-modal";
import {
  InterviewSchemaType,
  InterviewValidationSchema,
} from "../schema/interview-schema";

const useCreateInterview = () => {
  const [createInterview, { isLoading }] = usePostDataMutation();
  const { handleCloseModal } = useAddModal();
  const initialValues: InterviewSchemaType = {
    candidate_name: "",
  };

  const formik = useFormik<InterviewSchemaType>({
    initialValues,
    validationSchema: InterviewValidationSchema,
    onSubmit: async (values, { setErrors, resetForm }) => {
      const response = (await createInterview({
        url: endpoints.interview.create,
        data: values,
        invalidateTag: [apiTags.interview.list],
      })) as ApiResponse;
      handleResponse({
        response,
        setErrorCallBack: setErrors,
        handleCloseModal: handleCloseModal,
        resetForm: resetForm,
      });
    },
  });

  return {
    formik,
    isLoading,
  };
};

export default useCreateInterview;
