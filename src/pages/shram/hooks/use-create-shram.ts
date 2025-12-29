import { usePostDataMutation } from "@/api/api";
import { useAddModal } from "@/hooks/add-modal";
import { useFormik } from "formik";
import { endpoints } from "@/api/endpoints";
import { apiTags } from "@/constant/tag";
import { ApiResponse } from "@/api/api.error";
import { handleResponse } from "@/utils/handleResponse";
import { shramSchemaType, shramValidationSchema } from "../schema/shram-schema";

const useCreateShram = () => {
  const [createShram, { isLoading }] = usePostDataMutation();
  const { handleCloseModal } = useAddModal();
  const initialValues: shramSchemaType = {
    candidate_name: "",
    candidate_job: "",
    ols_reference_number: "",
    approval_date: "",
    approval_file: "",
  };

  const formik = useFormik<shramSchemaType>({
    initialValues,
    validationSchema: shramValidationSchema,
    onSubmit: async (values, { setErrors, resetForm }) => {
      const response = (await createShram({
        url: endpoints.shram.create,
        data: values,
        invalidateTag: [apiTags.shram.list],
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

export default useCreateShram;
