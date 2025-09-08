import { useGetDataQuery, useUpdateDataMutation } from "@/api/api";
import { useFormik } from "formik";
import {
  preApplicationValidationSchema,
  PreApplicationValidationSchemaType,
} from "../schema/preApplicationValidationSchema";
const useUpdatePreApplication = () => {
  const [
    updatePreApplication,
    {
      isError: isUpdatePreApplicationError,
      isLoading: isUpdatePreApplicationLoading,
      isSuccess: isUpdatePreApplicationSuccess,
    },
  ] = useUpdateDataMutation();

  const {
    data,
    isError: isGetPreApplicationDetailsError,
    isLoading: isGetPreApplicationDetailsLoading,
    isSuccess: isGetPreApplicationDetailsSuccess,
  } = useGetDataQuery({ url: "", params: {}, tag: "" });

  const initial: PreApplicationValidationSchemaType = data;

  const initialValues: PreApplicationValidationSchemaType = {
    id: initial?.id || "",
    title: initial?.title || "",
    description: initial?.description || "",
    document: initial?.document || null,
  };

  const formik = useFormik({
    initialValues,
    validationSchema: preApplicationValidationSchema,
    enableReinitialize: true,
    onSubmit: async (values) => {
      updatePreApplication({
        data: values,
        url: "",
        invalidateTag: "",
      });
    },
  });

  return {
    data,
    formik,
    isGetPreApplicationDetailsError,
    isGetPreApplicationDetailsLoading,
    isGetPreApplicationDetailsSuccess,
    isUpdatePreApplicationSuccess,
    isUpdatePreApplicationLoading,
    isUpdatePreApplicationError,
  };
};

export default useUpdatePreApplication;
