import { usePostDataMutation } from "@/api/api";
import { useAddModal } from "@/hooks/add-modal";
import { useFormik } from "formik";
import { endpoints } from "@/api/endpoints";
import { apiTags } from "@/constant/tag";
import { ApiResponse } from "@/api/api.error";
import { handleResponse } from "@/utils/handleResponse";
import {
  medicalSchemaType,
  medicalValidationSchema,
} from "../schema/medical-schema";

const useCreateMedical = () => {
  const [createMedical, { isLoading }] = usePostDataMutation();
  const { handleCloseModal } = useAddModal();
  const initialValues: medicalSchemaType = {
    candidate_name: "",
  };

  const formik = useFormik<medicalSchemaType>({
    initialValues,
    validationSchema: medicalValidationSchema,
    onSubmit: async (values, { setErrors, resetForm }) => {
      const response = (await createMedical({
        url: endpoints.medical.create,
        data: values,
        invalidateTag: [apiTags.medical.list],
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

export default useCreateMedical;
