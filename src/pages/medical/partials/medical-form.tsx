import FormInputDate from "@/components/form/form-input-date";
import FormInputSelect, { IOption } from "@/components/form/form-input-select";
import FormTextArea from "@/components/form/form-text-area";
import FormInputPdf from "@/components/form/FormInputPdf";
import FormInputText from "@/components/form/FormInputText";

const MedicalForm = () => {
  const candidateName: IOption[] = [
    { label: "Gaurav Singh", value: "gaurav-singh" },
    { label: "Aditya Roshan", value: "aditya-roshan" },
  ];

  const medicalStatus: IOption[] = [
    { label: "Passed", value: "passed" },
    { label: "Failed", value: "failed" },
  ];
  return (
    <div className="grid grid-cols-1 gap-4">
      <FormInputSelect
        label="Candidate Name"
        name="candidate"
        options={candidateName}
      />
      <FormInputDate label="Exam Date" name="exam_date" />
      <FormInputText label="Medical Center" name="medical_center" />
      <FormInputPdf label="Report File" name="report_file" />
      <FormInputSelect label="Status" name="status" options={medicalStatus} />
      <FormTextArea label="Remarks" name="remarks" />
    </div>
  );
};
export default MedicalForm;
