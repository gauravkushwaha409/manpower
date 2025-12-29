import { usePostDataMutation } from "@/api/api";
import { useAddModal } from "@/hooks/add-modal";
import { useFormik } from "formik";
import { endpoints } from "@/api/endpoints";
import { apiTags } from "@/constant/tag";
import { ApiResponse } from "@/api/api.error";
import { handleResponse } from "@/utils/handleResponse";
import {
  orientationSchemaType,
  orientationValidationSchema,
} from "../schema/orientation-schema";

const useCreateOrientation = () => {
  const [createOrientation, { isLoading }] = usePostDataMutation();
  const { handleCloseModal } = useAddModal();
  const initialValues: orientationSchemaType = {
    candidate_name: "",
  };

  const formik = useFormik<orientationSchemaType>({
    initialValues,
    validationSchema: orientationValidationSchema,
    onSubmit: async (values, { setErrors, resetForm }) => {
      const response = (await createOrientation({
        url: endpoints.orientation.create,
        data: values,
        invalidateTag: [apiTags.orientation.list],
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

export default useCreateOrientation;
