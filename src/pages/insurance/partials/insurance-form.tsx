import FormInputDate from "@/components/form/form-input-date";
import FormInputSelect, { IOption } from "@/components/form/form-input-select";
import FormInputPdf from "@/components/form/FormInputPdf";
import FormInputText from "@/components/form/FormInputText";

const InsuranceForm = () => {
  const candidateName: IOption[] = [
    { label: "Gaurav Singh", value: "gaurav-singh" },
    { label: "Aditya Roshan", value: "aditya-roshan" },
  ];

  const insuranceCompanyOption: IOption[] = [
    { label: "NIC Asia Insurance", value: "nic_asia" },
    { label: "Nepal Insurance", value: "nepal_insurance" },
  ];

  return (
    <div className="grid grid-cols-1 gap-4">
      <FormInputSelect
        label="Candidate Name"
        name="candidate_name"
        options={candidateName}
      />
      <FormInputSelect
        label="Insurance Company"
        name="insurance_company"
        options={insuranceCompanyOption}
      />
      <FormInputText label="Policy No" name="policy_no" />
      <FormInputDate label="Valid From" name="valid_from" />
      <FormInputDate label="Valid To" name="valid_to" />
      <FormInputPdf label="Insurance Document" name="document" />
    </div>
  );
};

export default InsuranceForm;
