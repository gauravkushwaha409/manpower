import FormInputDate from "@/components/form/form-input-date";
import FormInputSelect, { IOption } from "@/components/form/form-input-select";
import FormInputText from "@/components/form/FormInputText";

const OrientationForm = () => {
  const candidateName: IOption[] = [
    { label: "Gaurav Singh", value: "gaurav-singh" },
    { label: "Aditya Roshan", value: "aditya-roshan" },
  ];
  const orientationTypeOption: IOption[] = [
    { label: "Work Orientation", value: "work_orientation" },
    { label: "Visit Orientation", value: "visit_orientation" },
  ];

  const orientationStatusOption: IOption[] = [
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
        label="Orientation Type"
        name="orientation_type"
        options={orientationTypeOption}
      />
      <FormInputDate label="Application Date" name="application_date" />
      <FormInputDate label="Approval Date" name="approval_date" />
      <FormInputDate label="Orientation Expire" name="orientation_expire" />
      <FormInputSelect
        label="Orientation Status"
        name="orientation_status"
        options={orientationStatusOption}
      />
    </div>
  );
};
export default OrientationForm;
