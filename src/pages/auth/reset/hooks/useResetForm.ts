import { useFormik } from "formik";
import { resetFormSchema, ResetFormValues } from "../schema/resetFormSchema";
import { usePostDataMutation } from "@/api/api";

export const useResetForm = () => {
  const [resetForm, { isLoading, isError, isSuccess }] = usePostDataMutation();
  const initialValues: ResetFormValues = {
    email: "",
  };
  const formik = useFormik<ResetFormValues>({
    initialValues,

    validationSchema: resetFormSchema,
    onSubmit: async (values) => {
      resetForm({
        url: "",
        data: values,
        invalidateTag: "",
      });
    },
  });
  return { formik, isLoading, isError, isSuccess };
};
