import { useGetDataQuery, useUpdateDataMutation } from "@/api/api";
import { useFormik } from "formik";
import { ILanguage } from "@/pages/language/interface/ILanguage.ts";
import { languageValidationSchema } from "@/pages/language/hooks/useCreateLanguage.ts";

const useUpdateLanguage = () => {
  const [
    updateLanguage,
    {
      isError: isUpdateLanguageError,
      isLoading: isUpdateLanguageLoading,
      isSuccess: isUpdateLanguageSuccess,
    },
  ] = useUpdateDataMutation();

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

  const updateLanguageFormik = useFormik({
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
    updateLanguageFormik,
    isGetLanguageDetailsError,
    isGetLanguageDetailsLoading,
    isGetLanguageDetailsSuccess,
    isUpdateLanguageSuccess,
    isUpdateLanguageLoading,
    isUpdateLanguageError,
  };
};

export default useUpdateLanguage;
