import FormInputDate from "@/components/form/form-input-date";
import FormInputSelect, { IOption } from "@/components/form/form-input-select";
import FormInputText from "@/components/form/FormInputText";
import FormTextArea from "@/components/form/form-text-area";

export const interviewResultOption: IOption[] = [
  { label: "Pending", value: "pending" },
  { label: "Selected", value: "selected" },
  { label: "Rejected", value: "rejected" },
];

const InterviewForm = () => {
  const candidateName: IOption[] = [
    { label: "Gaurav Singh", value: "gaurav-singh" },
    { label: "Aditya Roshan", value: "aditya-roshan" },
  ];
  const interviewMode: IOption[] = [
    { label: "Offline", value: "offline" },
    { label: "Onsite", value: "onsite" },
  ];

  return (
    <div className="grid grid-cols-1 gap-4">
      <FormInputSelect
        label="Candidate Name"
        name="candidate_name"
        options={candidateName}
      />
      <FormInputText label="Candidate Job" name="candidate_job" disabled />
      <FormInputText label="Employer Name" name="employer_name" disabled />
      <FormInputDate label="Interview Date" name="interview_date" />

      <FormInputSelect
        label="Interview Mode"
        name="interview_mode"
        options={interviewMode}
      />

      <FormInputText
        label="Interview Location"
        name="interview_location"
        disabled
      />

      <FormInputText
        label="Interviewer Name"
        name="interviewer_name"
        disabled
      />
      <FormInputSelect label="Result" name="result" options={interviewResultOption} />
      <FormTextArea label="Remarks" name="remarks" />
    </div>
  );
};

export default InterviewForm;
