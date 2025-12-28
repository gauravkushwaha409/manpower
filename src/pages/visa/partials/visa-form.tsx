import FormInputDate from "@/components/form/form-input-date";
import FormInputSelect, { IOption } from "@/components/form/form-input-select";
import FormInputText from "@/components/form/FormInputText";

const VisaForm = () => {
  const candidateName: IOption[] = [
    { label: "Gaurav Singh", value: "gaurav-singh" },
    { label: "Aditya Roshan", value: "aditya-roshan" },
  ];
  const visaTypeOption: IOption[] = [
    { label: "Work Visa", value: "work_visa" },
    { label: "Visit Visa", value: "visit_visa" },
  ];

  const visaStatusOption: IOption[] = [
    { label: "Approved", value: "approved" },
    { label: "Pending", value: "approved" },
    { label: "Rejected", value: "rejected" },
  ];
  return (
    <div className="grid grid-cols-1 gap-4">
      <FormInputSelect
        label="Candidate Name"
        name="candidate"
        options={candidateName}
      />
      <FormInputText label="Candidate Job" name="candidate_job" disabled />
      <FormInputSelect
        label="Visa Type"
        name="visa_type"
        options={visaTypeOption}
      />
      <FormInputDate label="Application Date" name="application_date" />
      <FormInputDate label="Approval Date" name="approval_date" />
      <FormInputDate label="Visa Expire" name="visa_expire" />
      <FormInputSelect
        label="Visa Status"
        name="visa_status"
        options={visaStatusOption}
      />
    </div>
  );
};
export default VisaForm;
