import { useFormik } from "formik";
import {
  NewPasswordFormValues,
  newPasswordValidationSchema,
} from "../schema/newPasswordValidation";
import { usePostDataMutation } from "@/api/api";

const useCreateNewPassword = () => {
  const [createNewPasswordForm, { isError, isLoading, isSuccess }] =
    usePostDataMutation();

  const initialValues: NewPasswordFormValues = {
    password: "",
    rePassword: "",
  };
  const formik = useFormik<NewPasswordFormValues>({
    initialValues,
    validationSchema: newPasswordValidationSchema,
    onSubmit: async (values) => {
      createNewPasswordForm({
        url: "",
        data: values,
        invalidateTag: "",
      });
    },
  });
  return { formik, isError, isLoading, isSuccess };
};

export default useCreateNewPassword;
