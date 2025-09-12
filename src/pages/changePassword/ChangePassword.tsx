import ExtendedForm from "@/components/extended-components/ExtendedForm";
import useCreateNewPassword from "./hooks/useCreateNewPasswordForm";
import ChangePasswordForm from "./partials/ChangePasswordForm";
import PageHeader from "@/common/PageHeader";
import Breadcrumb from "@/components/reusable-component/Breadcrumb";

const ChangePassword = () => {
  const { formik } = useCreateNewPassword();
  return (
    <div className="flex flex-col gap-4">
      <Breadcrumb Navone="Dashboard" Navtwo="Change Password" />
      <PageHeader title="Change Password" showAddButton={false} />
      <ExtendedForm formik={formik} submitText="Change Password">
        <ChangePasswordForm />
      </ExtendedForm>
    </div>
  );
};

export default ChangePassword;
