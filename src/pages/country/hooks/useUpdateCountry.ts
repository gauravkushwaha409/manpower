import {useGetDataQuery, useUpdateDataMutation} from "@/api/api";
import {useFormik} from "formik";
import {ICountry} from "@/pages/country/interface/ICountry.ts";
import {countryValidationSchema} from "@/pages/country/hooks/useCreateCountry.ts";

const useUpdateCountry = () => {
    const [updateCountry, {
        isError: isUpdateCountryError,
        isLoading: isUpdateCountryLoading,
        isSuccess: isUpdateCountrySuccess
    }] = useUpdateDataMutation();

    // Get Initial Data
    const {
        data,
        isError: isGetCountryDetailsError,
        isLoading: isGetCountryDetailsLoading,
        isSuccess: isGetCountryDetailsSuccess,
    } = useGetDataQuery({
        url: "",
        params: {},
        tag: "",
    });

    const initial: ICountry = data;

    const initialValues: ICountry = {
        id: initial?.id || "",
        country: initial?.country || "",
        flag: initial?.flag || null,
        currency: initial?.currency || "",
        capital: initial?.capital || "",
        language: initial?.language || "",
        religion: initial?.religion || "",
    };

    const updateCountryFormik = useFormik({
        initialValues,
        validationSchema: countryValidationSchema,
        enableReinitialize: true,
        onSubmit: async (values) => {
            updateCountry({
                data: values,
                url: "",
                invalidateTag: "",
            });
        },
    });

    return {
        data,
        updateCountryFormik,
        isGetCountryDetailsError,
        isGetCountryDetailsLoading,
        isGetCountryDetailsSuccess,
        isUpdateCountrySuccess,
        isUpdateCountryLoading,
        isUpdateCountryError,
    };
};

export default useUpdateCountry;
