import * as Yup from "yup";
import { useFormik } from "formik";
import { usePostDataMutation } from "@/api/api";
import { countryValidationSchema } from "../schema/countryValidation";
export type CountryFormValues = Yup.InferType<typeof countryValidationSchema>;

const useCreateCountry = () => {
    const [createCountry, { isError: isCountryError, isLoading: isCountryLoading, isSuccess: isCountrySuccess }] = usePostDataMutation();

    // Initial values based strictly on the provided ICountry interface
    const initialValues: CountryFormValues = {
        country: "",
        currency: "",
        capital: "",
        language: "",
        religion: "",
    };

    const addCountryFormik = useFormik({
        initialValues,
        validationSchema: countryValidationSchema,
        onSubmit: async (values) => {
            createCountry({
                url: "",
                data: values,
                invalidateTag: "",
            });
        },
    });

    return { addCountryFormik, isCountryError, isCountryLoading, isCountrySuccess };
};

export default useCreateCountry;


