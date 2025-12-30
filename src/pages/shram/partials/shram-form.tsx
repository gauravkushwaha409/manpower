import FormInputDate from "@/components/form/form-input-date";
import FormInputSelect, { IOption } from "@/components/form/form-input-select";
import FormInputPdf from "@/components/form/FormInputPdf";
import FormInputText from "@/components/form/FormInputText";

export const shramStatusForm: IOption[] = [
  { label: "Pending", value: "pending" },
  { label: "Approved", value: "approved" },
  { label: "Rejected", value: "rejected" },
];

const ShramForm = () => {
  return (
    <div className="grid grid-cols-1 gap-4">
      <FormInputText label="Candidate Name" name="candidate_name" disabled />
      <FormInputText label="Candidate Job" name="candidate_job" disabled />
      <FormInputText label="Employer Name" name="employer_name" disabled />
      <FormInputSelect label="Status" name="status" options={shramStatusForm} />
      <FormInputText label="OLS Reference No." name="ols_reference_number" />
      <FormInputDate label="Approval Date" name="approval_date" />
      <FormInputPdf label="Approval File" name="approval_file" />
    </div>
  );
};
export default ShramForm;
