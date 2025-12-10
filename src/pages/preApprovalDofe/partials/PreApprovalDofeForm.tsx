import FormInputRadio from "@/components/form/FormInputRadio";
import InputCheckbox from "@/components/form/InputCheckBox";
import InputDate from "@/components/form/FormInputDate";
import { InputFile } from "@/components/form/InputFile";
import { InputSearchSelect } from "@/components/form/InputSelect";
import InputText from "@/components/form/InputText";

const PreApprovalDofeForm = () => {
  return (
    <div className="grid grid-cols-2 gap-5">
      <div className="col-span-2 grid grid-cols-3 gap-8">
        <InputSearchSelect
          label="Country"
          name="country"
          options={[
            { label: "Qatar", value: "qatar" },
            { label: "UAE", value: "uae" },
            { label: "Kuwait", value: "kuwait" },
            { label: "Baharain", value: "baharain" },
            { label: "KSA", value: "saudi" },
            { label: "Malaysia", value: "malaysia" },
            { label: "Oman", value: "oman" },
            { label: "Japan", value: "japan" },
            { label: "South Korea", value: "south-korea" },
            { label: "Singapore", value: "singapore" },
          ]}
          placeholder="Select Country"
        />
        <InputSearchSelect
          label="Recuirtment Company"
          name="company"
          options={[]}
          placeholder="Select Recuirtment Company"
        />
        <InputText
          label="Pre Approval Certifcate Number"
          name="pre_approval_certificate_number"
          placeholder="Enter your Pre Approval Certificate Number"
        />
      </div>

      <div className="col-span-2">
        <InputFile
          label="Pre Approval Certifcate Pdf"
          name="demand_reference_number"
          placeholder="Enter your demand reference number"
        />
      </div>

      <div className="col-span-2 grid grid-cols-4 gap-6">
        <InputDate
          label="Enter your Pre Approval Date"
          name="preApprovalDate"
          placeholder="Enter your Pre Approval Date"
        />
        <InputDate
          label="Enter your Pre Approval Validity"
          name="preApprovalValidity"
          placeholder="Enter your Pre Approval validity"
        />
        <InputText
          label="Enter your Pre LT number"
          name="ltNumber"
          placeholder="Enter your Pre LT number"
        />
        <InputText
          label="Enter your Chalani Number"
          name="chalanNumber"
          placeholder="Enter your Chalani Number"
        />
      </div>

      <div className="col-span-2 grid grid-cols-2 gap-6">
        <InputSearchSelect
          label="Document Type"
          name="company"
          options={[
            { label: "Embassy Attested Demand Letter", value: "" },
            { label: "Power of Attorney", value: "" },
            { label: "Contract", value: "" },
            { label: "Aggrement", value: "" },
            { label: "Trade Licence", value: "" },
            { label: "Quota Approval", value: "" },
            { label: "Gaurantee Letter", value: "" },
          ]}
          placeholder="Select Recuirtment Company"
        />
        <InputFile
          label="Document"
          name="demand_reference_number"
          placeholder="Enter your demand reference number"
        />
      </div>

      <p>Job Details</p>
      <div className="col-span-2 grid grid-cols-2 gap-6">
        <InputText
          label="Job Title"
          name="chalanNumber"
          placeholder="Enter your Chalani Number"
        />
        <InputText
          label="Job Description"
          name="chalanNumber"
          placeholder="Enter your Chalani Number"
        />
        <InputText
          label="Basic Salary"
          name="chalanNumber"
          placeholder="Enter your Chalani Number"
        />
        <FormInputRadio
          options={[
            { label: "Yes", value: "true" },
            { label: "No", value: "false" },
          ]}
          label="Food"
          name="food"
        />
        <FormInputRadio
          options={[
            { label: "Yes", value: "true" },
            { label: "No", value: "false" },
          ]}
          label="Accommodation"
          name="accommodation"
        />
        <FormInputRadio
          options={[
            { label: "Yes", value: "true" },
            { label: "No", value: "false" },
          ]}
          label="Transportation"
          name="transportation"
        />
        <FormInputRadio
          options={[
            { label: "Yes", value: "true" },
            { label: "No", value: "false" },
          ]}
          label="Free Visa"
          name="free_visa"
        />
        <FormInputRadio
          options={[
            { label: "Yes", value: "true" },
            { label: "No", value: "false" },
          ]}
          label="Free Ticket"
          name="free_ticket"
        />
        <InputText
          label="Working Hours"
          name="chalanNumber"
          placeholder="Enter your Chalani Number"
        />
        <InputCheckbox label="Over Time" name="food" />
        <InputText
          label="Contact Period (Years)"
          name="chalanNumber"
          placeholder="Enter your Chalani Number"
        />
        <InputText
          label="Working City"
          name="chalanNumber"
          placeholder="Enter your Chalani Number"
        />
        <InputText
          label="No. of vacancies"
          name="chalanNumber"
          placeholder="Enter your Chalani Number"
        />
        <InputText
          label="No. of Male"
          name="chalanNumber"
          placeholder="Enter your Chalani Number"
        />
        <InputText
          label="No. of Female"
          name="chalanNumber"
          placeholder="Enter your Chalani Number"
        />
        <InputCheckbox label="Experience" name="food" />
        <InputText
          label="If yes (Years)"
          name="chalanNumber"
          placeholder="Enter your Chalani Number"
        />
        <InputSearchSelect
          label="Academic Qualification"
          name="company"
          options={[
            { label: "Embassy Attested Demand Letter", value: "" },
            { label: "Power of Attorney", value: "" },
            { label: "Contract", value: "" },
            { label: "Aggrement", value: "" },
            { label: "Trade Licence", value: "" },
            { label: "Quota Approval", value: "" },
            { label: "Gaurantee Letter", value: "" },
          ]}
          placeholder="Select Recuirtment Company"
        />
        <InputCheckbox label="Foreign Umployment" name="food" />
        <InputCheckbox label="Sync With Job Portal" name="food" />
      </div>
    </div>
  );
};

export default PreApprovalDofeForm;
