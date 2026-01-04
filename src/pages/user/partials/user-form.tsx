import FormInputSelect from "@/components/form/form-input-select";
import FormInputText from "@/components/form/FormInputText";

export default function UserForm() {
  return (
    <div className="grid grid-cols-1 gap-4">
      <FormInputText label="Name" name="name" />
      <FormInputText label="Email" name="email" />
      <FormInputText label="Phone No." name="phone_no" />
      <FormInputSelect
        label="Role"
        name="role"
        options={[{ label: "Manager", value: "manager" }]}
      />
    </div>
  );
}
