import InputText from "@/components/form/FormInputText";
import InputSearchSelect from "@/components/form/form-input-select";
import InputDate from "@/components/form/form-input-date";

const OrientationForm = () => {
  return (
    <>
      <div className="flex flex-col gap-5">
        <div className="grid grid-cols-2 gap-5">
          <InputSearchSelect
            label="Candidate Name"
            name="candidate_name"
            options={[{ label: "Gaurav", value: "gaurav" }]}
          />
          <InputText
            label="Orientation Center Name"
            name="orientation_center_name"
            placeholder="Enter Orientation Center Name"
          />
          <InputText
            label="Certificate No."
            name="certificate_no"
            placeholder="Enter Certificate Number"
          />
        </div>

        <div className="grid grid-cols-2 gap-5">
          <InputDate
            label="Start Date"
            name="start_date"
            placeholder={"Enter start date"}
          />
          <InputDate
            label="End Date"
            name="end_date"
            placeholder={"Enter end date"}
          />
        </div>
      </div>
    </>
  );
};

export default OrientationForm;
