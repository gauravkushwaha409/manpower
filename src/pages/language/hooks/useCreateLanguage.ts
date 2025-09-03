import { useFormik } from "formik";
import { usePostDataMutation } from "@/api/api";
import { ILanguage } from "@/pages/language/interface/ILanguage.ts";
import { languageValidationSchema } from "../schema/languageValidation";

const useCreateLanguage = () => {
  const [createLanguage, { isError, isLoading, isSuccess }] =
    usePostDataMutation();

  const initialValues: ILanguage = {
    id: "",
    language: "",
  };

  const formik = useFormik({
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
    formik,
    isError,
    isLoading,
    isSuccess,
  };
};

export default useCreateLanguage;
