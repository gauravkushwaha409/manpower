import { usePostDataMutation } from "@/api/api";
import { loginUser } from "@/store/authSlice";
import { showErrorMessage, showSuccessMessage } from "@/utils/toast";
import { useFormik } from "formik";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { formSchema, LoginFormValues } from "../schema/loginValidation";

const useLogin = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [login, { isLoading, isSuccess, isError }] = usePostDataMutation();

  const initialValues: LoginFormValues = {
    email: "",
    password: "",
  };

  const formik = useFormik({
    initialValues,
    validationSchema: formSchema,
    onSubmit: async (values) => {
      const res = await login({
        url: "",
        data: values,
      });
      const response = res?.data;
      const error = res?.error;
      if (response && response?.success) {
        dispatch(
          loginUser({
            accessToken: response?.token?.access,
            refreshToken: response?.token?.refresh,
            userId: response?.user?.id,
            isManpowerLoggedIn: true,
          })
        );
        navigate("/");
        showSuccessMessage(response?.message);
      } else if (error) {
        showErrorMessage(error?.data?.message);
      }
    },
  });

  return { formik, isLoading, isSuccess, isError };
};
export default useLogin;
