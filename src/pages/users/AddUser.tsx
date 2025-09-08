import PageHeader from "@/common/PageHeader";
import ExtendedForm from "@/components/extended-components/ExtendedForm";
import Breadcrumb from "@/components/reusable-component/Breadcrumb";
import UserForm from "./partials/UserForm";
import useCreateUser from "./hooks/useCreateUser";

const AddUser = () => {
  const { formik } = useCreateUser();
  return (
    <div className="grid grid-cols-1 gap-5">
      <Breadcrumb Navone="Dashboard" Navtwo="Users" />
      <PageHeader title="Add User" showAddButton={false} />
      <ExtendedForm formik={formik}>
        <UserForm />
      </ExtendedForm>
    </div>
  );
};

export default AddUser;
