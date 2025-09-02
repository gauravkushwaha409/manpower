import { useFormik } from "formik";
import { usePostDataMutation } from "@/api/api";
import {
  countryValidationSchema,
  CountryValidationSchemaType,
} from "../schema/countryValidationSchema";

const useCreateCountry = () => {
  const [
    createCountry,
    {
      isError: isCountryError,
      isLoading: isCountryLoading,
      isSuccess: isCountrySuccess,
    },
  ] = usePostDataMutation();

  const initialValues: CountryValidationSchemaType = {
    country: "",
    currency: "",
    capital: "",
    language: "",
    flag: "",
  };

  const formik = useFormik<CountryValidationSchemaType>({
    initialValues,
    validationSchema: countryValidationSchema,
    onSubmit: async (values) => {
      await createCountry({
        url: "/country",
        data: values,
        invalidateTag: "",
      });
    },
  });

  return {
    formik,
    isCountryError,
    isCountryLoading,
    isCountrySuccess,
  };
};

export default useCreateCountry;
