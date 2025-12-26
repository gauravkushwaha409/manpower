import { useFormik } from "formik";
import { usePostDataMutation } from "@/api/api";
import {
  CountrySchemaType,
  CountryValidationSchema,
} from "../schema/country-schema";
import { apiTags } from "@/constant/tag";
import { endpoints } from "@/api/endpoints";
import { ApiResponse } from "@/api/api.error";
import { handleResponse } from "@/utils/handleResponse";
import { useAddModal } from "@/hooks/add-modal";

const useCreateCountry = () => {
  const [createCountry, { isLoading }] = usePostDataMutation();
  const { handleCloseModal } = useAddModal();
  const initialValues: CountrySchemaType = {
    country: "",
    currency: "",
    capital: "",
    language: "",
  };

  const formik = useFormik<CountrySchemaType>({
    initialValues,
    validationSchema: CountryValidationSchema,
    onSubmit: async (values, { setErrors, resetForm }) => {
      const response = (await createCountry({
        url: endpoints.country.create,
        data: values,
        invalidateTag: [apiTags.country.list],
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

export default useCreateCountry;
