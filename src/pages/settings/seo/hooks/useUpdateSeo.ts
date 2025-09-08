import { useGetDataQuery, useUpdateDataMutation } from "@/api/api";
import { useFormik } from "formik";
import {
  seoValidationSchema,
  SeoValidationSchemaType,
} from "../schema/seoValidationSchema";

const useUpdateSeo = () => {
  const [
    updateSeo,
    {
      isError: isUpdateSeoSuccess,
      isLoading: isUpdateSeoLoading,
      isSuccess: isUpdateSeoError,
    },
  ] = useUpdateDataMutation();

  const {
    data,
    isError: isGetSeoDetailsError,
    isLoading: isGetSeoDetailsLoading,
    isSuccess: isGetSeoDetailsSuccess,
  } = useGetDataQuery({
    url: "/seo",
    params: {},
    tag: "",
  });

  const initial: SeoValidationSchemaType = data;

  const initialValues: SeoValidationSchemaType = {
    id: initial?.id || "",
    meta_description: initial?.meta_description || "",
    meta_title: initial?.meta_title || "",
    og_description: initial?.og_description || "",
    og_title: initial?.og_title || "",
    seo_type: initial?.seo_type || "",
  };

  const formik = useFormik({
    initialValues,
    validationSchema: seoValidationSchema,
    enableReinitialize: true,
    onSubmit: async (values) => {
      updateSeo({
        data: values,
        url: `/seo/${values?.id}`,
        invalidateTag: "",
      });
    },
  });

  return {
    data,
    formik,
    updateSeo,
    isGetSeoDetailsError,
    isGetSeoDetailsLoading,
    isGetSeoDetailsSuccess,
    isUpdateSeoSuccess,
    isUpdateSeoLoading,
    isUpdateSeoError,
  };
};

export default useUpdateSeo;
