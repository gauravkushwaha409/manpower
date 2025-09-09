import { useFormik } from "formik";

import { usePostDataMutation } from "@/api/api";
import {
  ChangePasswordFormValues,
  changeValidationSchema,
} from "../schema/newPasswordValidation";

const useCreateNewPassword = () => {
  const [createNewPasswordForm, { isError, isLoading, isSuccess }] =
    usePostDataMutation();

  const initialValues: ChangePasswordFormValues = {
    oldPassword: "",
    password: "",
    rePassword: "",
  };
  const formik = useFormik<ChangePasswordFormValues>({
    initialValues,
    validationSchema: changeValidationSchema,
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
