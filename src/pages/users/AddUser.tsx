import PageHeader from "@/common/PageHeader";
import ExtendedForm from "@/components/extended-components/ExtendedForm";
import Breadcrumb from "@/components/reusable-component/Breadcrumb";
import UserForm from "./partials/UserForm";
import useCreateUser from "./hooks/useCreateUser";
import { PATH } from "@/constant/path";

const AddUser = () => {
  const { formik } = useCreateUser();
  return (
    <div className="grid grid-cols-1 gap-5">
     <Breadcrumb
        items={[
          { label: "Dashboard" },
          {
            label: "Users",
            to: PATH.dashboard.users,
          },
          {
            label: "Add User",
          },
        ]}
      />
      <PageHeader title="Add User" showAddButton={false} />
      <ExtendedForm formik={formik}>
        <UserForm />
      </ExtendedForm>
    </div>
  );
};

export default AddUser;
