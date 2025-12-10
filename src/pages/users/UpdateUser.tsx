import PageHeader from "@/common/PageHeader";
import ExtendedForm from "@/components/extended-components/ExtendedForm";
import Breadcrumb from "@/components/reusable-component/Breadcrumb";
import UserForm from "./partials/UserForm";
import useUpdateUser from "./hooks/useUpdateUser";
import { PATH } from "@/constant/path";

const UpdateUser = () => {
  const { formik } = useUpdateUser();
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
            label: "Update User",
          },
        ]}
      />
      <PageHeader title="Update User" showAddButton={false} />
      <ExtendedForm formik={formik}>
        <UserForm />
      </ExtendedForm>
    </div>
  );
};

export default UpdateUser;
