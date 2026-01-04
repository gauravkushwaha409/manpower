import FormInputSelect from "@/components/form/form-input-select";
import FormInputText from "@/components/form/FormInputText";

export function SupplierForm() {
  return (
    <div className="grid grid-cols-1 gap-4">
      <FormInputText label="Name" name="name" />
      <FormInputText label="Address" name="address" />
      <div className="grid grid-cols-2 gap-4">
        <FormInputText label="Code" name="code" />
        <FormInputText label="PAN" name="pan" />
        <FormInputText label="Phone" name="phone" />
        <FormInputSelect
          label="Group"
          name="group"
          options={[{ label: "General", value: "general" }]}
        />
      </div>
    </div>
  );
}
