import { useFormik } from "formik";
import { usePostDataMutation } from "@/api/api";
import {
  preApplicationValidationSchema,
  PreApplicationValidationSchemaType,
} from "../schema/preApplicationValidationSchema";

const useCreatePreApplication = () => {
  const [
    createPreApplication,
    {
      isError: isCreatePreApplicationError,
      isLoading: isCreatePreApplicationLoading,
      isSuccess: isCreatePreApplicationSuccess,
    },
  ] = usePostDataMutation();

  const initialValues: PreApplicationValidationSchemaType = {
    id: "",
    title: "",
    description: "",
    document: null,
  };

  const formik = useFormik({
    initialValues,
    validationSchema: preApplicationValidationSchema,
    onSubmit: async (values) => {
      createPreApplication({
        url: "/pre-application",
        data: values,
        invalidateTag: "",
      });
    },
  });

  return {
    formik,
    isCreatePreApplicationError,
    isCreatePreApplicationLoading,
    isCreatePreApplicationSuccess,
  };
};

export default useCreatePreApplication;
