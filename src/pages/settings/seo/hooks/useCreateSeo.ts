import { useFormik } from "formik";
import { usePostDataMutation } from "@/api/api";
import {
  seoValidationSchema,
  SeoValidationSchemaType,
} from "../schema/seoValidationSchema";

const useCreateSeo = () => {
  const [
    createSeo,
    { isError: isSeoError, isLoading: isSeoLoading, isSuccess: isSeoSuccess },
  ] = usePostDataMutation();

  const initialValues: SeoValidationSchemaType = {
    id: "",
    meta_description: "",
    og_description: "",
    meta_title: "",
    og_title: "",
    seo_type: "",
  };

  const formik = useFormik<SeoValidationSchemaType>({
    initialValues,
    validationSchema: seoValidationSchema,
    onSubmit: async (values) => {
      await createSeo({
        url: "/seo",
        data: values,
        invalidateTag: "",
      });
    },
  });

  return {
    formik,
    isSeoError,
    isSeoLoading,
    isSeoSuccess,
  };
};

export default useCreateSeo;
