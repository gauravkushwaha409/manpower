import FormInputDate from "@/components/form/form-input-date";
import FormInputSelect, { IOption } from "@/components/form/form-input-select";
import FormInputPdf from "@/components/form/FormInputPdf";
import FormInputText from "@/components/form/FormInputText";

const JobOfferForm = () => {
  const candidateName: IOption[] = [
    { label: "Gaurav Singh", value: "gaurav-singh" },
    { label: "Aditya Roshan", value: "aditya-roshan" },
  ];
  return (
    <div className="grid grid-cols-1 gap-4">
      <FormInputSelect
        label="Candidate Name"
        name="candidate"
        options={candidateName}
      />
      <FormInputText label="Candidate Job" name="candidate_job" disabled />
      <FormInputText label="Offer Letter No" name="offer_letter_no" />
      <FormInputDate label="Offer Date" name="offer_date" />
      <FormInputDate label="Joining Date" name="joining_date" />
      <FormInputPdf label="Offer Document" name="offer_document" />
      <FormInputText label="Issued By" name="issued_by" />
    </div>
  );
};
export default JobOfferForm;
