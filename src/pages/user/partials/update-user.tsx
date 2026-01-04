import ExtendedForm from "@/components/extended-components/ExtendedForm";
import UserForm from "./user-form";
import useUpdateUser from "../hooks/use-update-user";

export default function UpdateUser() {
  const user = useUpdateUser();
  return (
    <ExtendedForm formik={user.formik}>
      <UserForm />
    </ExtendedForm>
  );
}
