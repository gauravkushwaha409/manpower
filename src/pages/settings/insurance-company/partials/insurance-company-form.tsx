import FormInputText from "@/components/form/FormInputText";

export default function InsuranceCompanyForm() {
  return (
    <div className="grid grid-cols-1 gap-4">
      <FormInputText label="Name" name="name" />
      <FormInputText label="Address" name="address" />
      <FormInputText label="Email" name="email" />
      <FormInputText label="Phone No." name="phone_no" />
    </div>
  );
}
