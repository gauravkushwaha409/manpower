import FormInputTextArea from "@/components/form/form-input-text-area";
import FormInputText from "@/components/form/FormInputText";

export default function RoleForm() {
  return (
    <div className="grid grid-cols-1 gap-4">
      <FormInputText label="Role Name" name="role_name" />
      <FormInputTextArea label="Description" name="description" />
    </div>
  );
}
