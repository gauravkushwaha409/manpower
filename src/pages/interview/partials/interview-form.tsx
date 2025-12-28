import FormInputSelect, { IOption } from "@/components/form/form-input-select";

const InterviewForm = () => {
  const candidateName: IOption[] = [
    { label: "Gaurav Singh", value: "gaurav-singh" },
    { label: "Aditya Roshan", value: "aditya-roshan" },
  ];
  return (
    <div className="grid grid-cols-1 gap-4">
      <FormInputSelect
        label="Candidate Name"
        name="candidate_name"
        options={candidateName}
      />
    </div>
  );
};
export default InterviewForm;
