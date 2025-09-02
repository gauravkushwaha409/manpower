import { useFormik } from "formik";
import { usePostDataMutation } from "@/api/api";
import { countryValidationSchema, CountryValidationSchemaType } from "../schema/countryValidation";


const useCreateCountry = () => {
  const [
    createCountry,
    {
      isError: isCountryError,
      isLoading: isCountryLoading,
      isSuccess: isCountrySuccess,
    },
  ] = usePostDataMutation();

  const initialValues:CountryValidationSchemaType = {
    country: "",
    currency: "",
    capital: "",
    language: "",
    religion: "",
    flag: "",
  };

  const formik = useFormik<CountryValidationSchemaType>({
    initialValues,
    validationSchema: countryValidationSchema,
    onSubmit: async (values) => {
      await createCountry({
        url: "/countries",
        data: values,
        invalidateTag: "Country",
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
