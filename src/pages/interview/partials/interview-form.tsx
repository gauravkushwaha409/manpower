import FormInputDate from "@/components/form/form-input-date";
import FormInputSelect, { IOption } from "@/components/form/form-input-select";
import FormInputText from "@/components/form/FormInputText";
import FormTextArea from "@/components/form/form-text-area";

const InterviewForm = () => {
  const candidateName: IOption[] = [
    { label: "Gaurav Singh", value: "gaurav-singh" },
    { label: "Aditya Roshan", value: "aditya-roshan" },
  ];
  const interviewMode: IOption[] = [
    { label: "Onsite", value: "onsite" },
    { label: "Online", value: "online" },
  ];

  const resultOption: IOption[] = [
    { label: "Selected", value: "selected" },
    { label: "Rejected", value: "rejected" },
  ];
  return (
    <div className="grid grid-cols-1 gap-4">
      <FormInputSelect
        label="Candidate Name"
        name="candidate_name"
        options={candidateName}
      />
      <FormInputText label="Candidate Job" name="job" disabled />
      <FormInputDate label="Interview Date" name="interview_date" />
      <FormInputSelect
        label="Interview Mode"
        name="interview_mode"
        options={interviewMode}
      />
      <FormInputText
        label="Interviewer Name"
        name="interviewer_name"
        disabled
      />
      <FormTextArea label="Remarks" name="remarks" />
      <FormInputSelect label="Result" name="result" options={resultOption} />
    </div>
  );
};
export default InterviewForm;
