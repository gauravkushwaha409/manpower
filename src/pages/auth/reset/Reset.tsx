import ExtendedForm from "@/components/extended-components/ExtendedForm";
import { Link } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import ResetForm from "./partials/ResetForm";
import { useResetForm } from "./hooks/useResetForm";

const Reset = () => {
  const { formik } = useResetForm();
  return (
    <div className="flex justify-center items-center min-h-screen px-4">
      <div className="w-full max-w-2xl bg-white p-8 rounded">
        <ExtendedForm formik={formik} submitText="Reset Password">
          <ResetForm />
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

export default Reset;
