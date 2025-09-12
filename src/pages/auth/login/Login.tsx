import ExtendedForm from "@/components/extended-components/ExtendedForm";
import { Link } from "react-router-dom";
import useLogin from "./hooks/useLogin";
import LoginForm from "./partials/LoginForm";
import bgimg from "@/assets/image.png";

const Login = () => {
  const { formik } = useLogin();
  return (
    <div
      className="flex justify-center items-center min-h-screen px-4 h-full w-full p-6 bg-cover bg-center relative"
      style={{ backgroundImage: `url(${bgimg})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-50 pointer-events-none" />
      <div className="relative w-full max-w-2xl p-8 rounded bg-opacity-90">
        <ExtendedForm formik={formik} submitText="Login">
          <div className="mb-6">
            <LoginForm />
          </div>
        </ExtendedForm>
        <div className="mt-6 text-center">
          Forgot Your Password?{" "}
          <Link
            to="/reset-password"
            className="font-semibold text-primary-500 hover:text-primary-600"
          >
            Reset Password
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
