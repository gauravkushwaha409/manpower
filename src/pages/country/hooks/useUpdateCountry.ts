import { useGetDataQuery, useUpdateDataMutation } from "@/api/api";
import { useFormik } from "formik";
import {
  countryValidationSchema,
  CountryValidationSchemaType,
} from "../schema/countryValidation";

const useUpdateCountry = () => {
  const [
    updateCountry,
    {
      isError: isUpdateCountryError,
      isLoading: isUpdateCountryLoading,
      isSuccess: isUpdateCountrySuccess,
    },
  ] = useUpdateDataMutation();

  const {
    data,
    isError: isGetCountryDetailsError,
    isLoading: isGetCountryDetailsLoading,
    isSuccess: isGetCountryDetailsSuccess,
  } = useGetDataQuery({
    url: "/country",
    params: {},
    tag: "",
  });

  const initial: CountryValidationSchemaType = data;

  const initialValues: CountryValidationSchemaType = {
    country: initial?.country || "",
    flag: initial?.flag || "",
    currency: initial?.currency || "",
    capital: initial?.capital || "",
    language: initial?.language || "",
  };

  const formik = useFormik({
    initialValues,
    validationSchema: countryValidationSchema,
    enableReinitialize: true,
    onSubmit: async (values, id) => {
      updateCountry({
        data: values,
        url: `/country/${id}`,
        invalidateTag: "",
      });
    },
  });

  return {
    data,
    formik,
    updateCountry,
    isGetCountryDetailsError,
    isGetCountryDetailsLoading,
    isGetCountryDetailsSuccess,
    isUpdateCountrySuccess,
    isUpdateCountryLoading,
    isUpdateCountryError,
  };
};

export default useUpdateCountry;
