import { useFormik } from "formik";
import { newPasswordValidationSchema } from "../schema/newPasswordValidation";
import { usePostDataMutation } from "@/api/api";
import { INewPassword } from "../interface/INewPassword.interface";

const useCreateNewPasswordForm = () => {
  const [createNewPasswordForm, { isError, isLoading, isSuccess }] =
    usePostDataMutation();

  const initialValues: INewPassword = {
    password: "",
    rePassword: "",
  };
  const formik = useFormik({
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

export default useCreateNewPasswordForm;
