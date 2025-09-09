import ExtendedForm from "@/components/extended-components/ExtendedForm";
import { Link } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import SetNewPasswordForm from "./partials/ResetPasswordForm";
import useCreateNewPassword from "./hooks/useCreateNewPasswordForm";

const ForgotPassword = () => {
  const { formik } = useCreateNewPassword();
  return (
    <div className="flex justify-center items-center min-h-screen px-4">
      <div className="w-full max-w-2xl bg-white p-8 rounded">
        <ExtendedForm formik={formik} submitText="Reset Password">
          <SetNewPasswordForm />
        </ExtendedForm>
        <div className="mt-4 text-center">
          <Link
            to="/login"
            className="font-semibold text-primary-500 hover:text-primary-600"
          >
            <FaArrowLeft className="inline-block mr-2" />
            Go back to Login Page
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
