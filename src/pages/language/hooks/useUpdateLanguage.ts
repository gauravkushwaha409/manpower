import * as Yup from "yup";
import { useGetDataQuery, useUpdateDataMutation } from "@/api/api";
import { useFormik } from "formik";
import { ILanguage } from "@/pages/language/interface/ILanguage.ts";
import { languageValidationSchema } from "../schema/languageValidation";
export type LanguageFormValues = Yup.InferType<typeof languageValidationSchema>;

const useUpdateLanguage = () => {
  const [updateLanguage, { isError, isLoading, isSuccess }] =
    useUpdateDataMutation();

  // Get Initial Data
  const {
    data,
    isError: isGetLanguageDetailsError,
    isLoading: isGetLanguageDetailsLoading,
    isSuccess: isGetLanguageDetailsSuccess,
  } = useGetDataQuery({
    url: "",
    params: {},
    tag: "",
  });

  const initial: ILanguage = data;

  const initialValues: ILanguage = {
    id: initial?.id || "",
    language: initial?.language || "",
  };

  const formik = useFormik({
    initialValues,
    validationSchema: languageValidationSchema,
    enableReinitialize: true,
    onSubmit: async (values) => {
      updateLanguage({
        data: values,
        url: "",
        invalidateTag: "",
      });
    },
  });

  return {
    data,
    formik,
    isGetLanguageDetailsError,
    isGetLanguageDetailsLoading,
    isGetLanguageDetailsSuccess,
    isSuccess,
    isLoading,
    isError,
  };
};

export default useUpdateLanguage;
