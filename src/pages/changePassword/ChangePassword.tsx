import ExtendedForm from "@/components/extended-components/ExtendedForm";
import useCreateNewPassword from "./hooks/useCreateNewPasswordForm";
import ChangePasswordForm from "./partials/ResetPasswordForm";

const ChangePassword = () => {
  const { formik } = useCreateNewPassword();
  return (
    <div className="flex justify-center items-center min-h-screen px-4">
      <div className="w-full max-w-2xl p-8 rounded">
        <ExtendedForm formik={formik} submitText="Change Password">
          <ChangePasswordForm />
        </ExtendedForm>
        {/* <div className="mt-4 text-center">
          <Link
            to="/login"
            className="font-semibold text-primary-500 hover:text-primary-600"
          >
            <FaArrowLeft className="inline-block mr-2" />
            Go back to Login Page
          </Link>
        </div> */}
      </div>
    </div>
  );
};

export default ChangePassword;
