import InputText from "@/components/form/InputText.tsx";
import { InputSearchSelect } from "@/components/form/InputSelect.tsx";
import InputDate from "@/components/form/InputDate";
import { InputFile } from "@/components/form/InputFile";

const MedicalReportForm = () => {
  return (
    <>
      <div className="flex flex-col gap-5">
        <div className="grid grid-cols-2 gap-4">
          <InputText label="Name" name="name" />
          <InputText label="Hospital Name" name="hospital_name" />
          <InputDate label="Report Date" name="report_date" />
          <InputSearchSelect
            label="Status"
            name="status"
            options={[{ label: "Pending", value: "pending" }]}
          />
        </div>
        <InputFile label="Medical Report File" name="medical_report_file" />
      </div>
    </>
  );
};

export default MedicalReportForm;
