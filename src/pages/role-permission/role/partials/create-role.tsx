import ExtendedForm from "@/components/extended-components/ExtendedForm";
import RoleForm from "./role-form";
import useCreateRolePermission from "../hooks/use-create-role";

export default function CreateRole() {
  const role = useCreateRolePermission();
  return (
    <ExtendedForm formik={role.formik}>
      <RoleForm />
    </ExtendedForm>
  );
}
