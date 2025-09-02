import * as Yup from "yup";
import { useFormik } from "formik";
import { usePostDataMutation } from "@/api/api";
import { ILanguage } from "@/pages/language/interface/ILanguage.ts";

const useCreateLanguage = () => {
  const [
    createLanguage,
    {
      isError: isLanguageError,
      isLoading: isLanguageLoading,
      isSuccess: isLanguageSuccess,
    },
  ] = usePostDataMutation();

  // Initial values based strictly on the provided ILanguage interface
  const initialValues: ILanguage = {
    id: "",
    language: "",
  };

  const addLanguageFormik = useFormik({
    initialValues,
    validationSchema: languageValidationSchema,
    onSubmit: async (values) => {
      createLanguage({
        url: "",
        data: values,
        invalidateTag: "",
      });
    },
  });

  return {
    addLanguageFormik,
    isLanguageError,
    isLanguageLoading,
    isLanguageSuccess,
  };
};

export default useCreateLanguage;

// Separate validation schema that may include additional fields
export const languageValidationSchema = Yup.object().shape({
  language: Yup.string()
    .required("language name is required")
    .min(3, "language name must be at least 3 character"),
});
