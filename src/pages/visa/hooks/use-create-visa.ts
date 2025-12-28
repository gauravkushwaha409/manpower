import { usePostDataMutation } from "@/api/api";
import { useAddModal } from "@/hooks/add-modal";
import { useFormik } from "formik";
import { endpoints } from "@/api/endpoints";
import { apiTags } from "@/constant/tag";
import { ApiResponse } from "@/api/api.error";
import { handleResponse } from "@/utils/handleResponse";
import { visaSchemaType, visaValidationSchema } from "../schema/visa-schema";

const useCreateVisa = () => {
  const [createVisa, { isLoading }] = usePostDataMutation();
  const { handleCloseModal } = useAddModal();
  const initialValues: visaSchemaType = {
    candidate_name: "",
  };

  const formik = useFormik<visaSchemaType>({
    initialValues,
    validationSchema: visaValidationSchema,
    onSubmit: async (values, { setErrors, resetForm }) => {
      const response = (await createVisa({
        url: endpoints.visa.create,
        data: values,
        invalidateTag: [apiTags.visa.list],
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

export default useCreateVisa;
