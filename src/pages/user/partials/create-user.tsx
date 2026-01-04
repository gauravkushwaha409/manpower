import ExtendedForm from "@/components/extended-components/ExtendedForm";
import UserForm from "./user-form";
import useCreateUser from "../hooks/use-create-user";

export default function CreateUser() {
  const user = useCreateUser();
  return (
    <ExtendedForm formik={user.formik}>
      <UserForm />
    </ExtendedForm>
  );
}
