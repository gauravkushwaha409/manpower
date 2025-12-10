import FormInputRadio from "@/components/form/FormInputRadio";
import InputDate from "@/components/form/FormInputDate";
import { InputSearchSelect } from "@/components/form/InputSelect";
import InputText from "@/components/form/FormInputText";
import FormInputPdf from "@/components/form/FormInputPdf";
import { CircleX, FileIcon, Plus } from "lucide-react";

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

      <div className="col-span-2 w-1/2">
        <FormInputPdf
          label="Pre Approval Certifcate Pdf"
          name="pre_approval_certificate_pdf"
          placeholder="Enter Pre Approval Certificate PDF"
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

      {/* Multiple Document Section */}

      {/* Job Details */}
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
        <div className="col-span-2 grid grid-cols-3 gap-6">
          <FormInputRadio
            options={[
              { label: "Yes", value: "true" },
              { label: "No", value: "false" },
            ]}
            label="Food"
            name="food"
            containerClassName="flex-row items-center gap-x-10"
            optionsWrapperClassName="flex-row"
          />
          <FormInputRadio
            options={[
              { label: "Yes", value: "true" },
              { label: "No", value: "false" },
            ]}
            label="Accommodation"
            name="accommodation"
            containerClassName="flex-row items-center gap-x-10"
            optionsWrapperClassName="flex-row"
          />
          <FormInputRadio
            options={[
              { label: "Yes", value: "true" },
              { label: "No", value: "false" },
            ]}
            label="Transportation"
            name="transportation"
            containerClassName="flex-row items-center gap-x-10"
            optionsWrapperClassName="flex-row"
          />
        </div>
        <div className="grid grid-cols-2 gap-6">
          <FormInputRadio
            options={[
              { label: "Yes", value: "true" },
              { label: "No", value: "false" },
            ]}
            label="Free Visa"
            name="free_visa"
            containerClassName="flex-row items-center gap-x-10"
            optionsWrapperClassName="flex-row"
          />
          <FormInputRadio
            options={[
              { label: "Yes", value: "true" },
              { label: "No", value: "false" },
            ]}
            label="Free Ticket"
            name="free_ticket"
            containerClassName="flex-row items-center gap-x-10"
            optionsWrapperClassName="flex-row"
          />
        </div>
        <InputText
          label="Working Hours"
          name="chalanNumber"
          placeholder="Enter your Chalani Number"
        />
        <FormInputRadio
          options={[
            { label: "Yes", value: "true" },
            { label: "No", value: "false" },
          ]}
          label="Over Time"
          name="overtime"
          containerClassName="flex-row items-center gap-x-10"
          optionsWrapperClassName="flex-row"
        />
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
        <FormInputRadio
          options={[
            { label: "Yes", value: "true" },
            { label: "No", value: "false" },
          ]}
          label="Experience"
          name="experience"
        />
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
        <FormInputRadio
          options={[
            { label: "Yes", value: "true" },
            { label: "No", value: "false" },
          ]}
          label="Foreign Employment"
          name="foreign_employment"
          containerClassName="flex-row items-center gap-x-10"
          optionsWrapperClassName="flex-row"
        />
        <FormInputRadio
          options={[
            { label: "Yes", value: "true" },
            { label: "No", value: "false" },
          ]}
          label="Sync With Job Portal"
          name="sync"
          containerClassName="flex-row items-center gap-x-10"
          optionsWrapperClassName="flex-row"
        />
      </div>
    </div>
  );
};

export default PreApprovalDofeForm;

export const PreApprovalFormStep1 = () => {
  return (
    <div className="grid grid-cols-2 gap-6">
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
      <div className="col-span-2 w-1/2">
        <FormInputPdf
          label="Pre Approval Certifcate Pdf"
          name="pre_approval_certificate_pdf"
          placeholder="Enter Pre Approval Certificate PDF"
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
    </div>
  );
};

export const PreApprovalFormStep2 = () => {
  return (
    <div className="grid grid-cols-2 gap-6">
      <InputSearchSelect
        label="Document Type"
        name="company"
        options={[
          {
            label: "Embassy Attested Demand Letter",
            value: "embassy attested demand letter",
          },
          { label: "Power of Attorney", value: "power of attorney" },
          { label: "Contract", value: "contract" },
          { label: "Aggrement", value: "aggrement" },
          { label: "Trade Licence", value: "trade licence" },
          { label: "Quota Approval", value: "quota approval" },
          { label: "Gaurantee Letter", value: "gaurantee letter" },
        ]}
        placeholder="Select Recuirtment Company"
      />
      <FormInputPdf
        label="Document"
        name="demand_reference_number"
        placeholder="Enter your demand reference number"
      />
      <div className="col-span-2">
        <button className="ml-auto typography-label-text flex items-center gap-x-2">
          <Plus size={26} className="bg-primary-500 text-white rounded-lg" />
          ADD
        </button>
      </div>

      <div className="col-span-2 flex gap-x-4">
        {Array.from({ length: 2 }).map(() => (
          <div className="w-20 relative flex flex-col items-center overflow-hidden">
            <FileIcon size={30} />
            <span className="typography-caption-c2">citizenship.pdf</span>

            <button
              type="button"
              className="absolute top-0 right-0 cursor-pointer rounded-full hover:bg-gray-100"
            >
              <CircleX size={16} className="text-red-500" />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export const PreApprovalFormStep3 = () => {
  return (
    <div className="space-y-6">
      <p>Job Details</p>
      <div className="grid grid-cols-2 gap-6">
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
      </div>
      <div className="grid grid-cols-3 gap-6">
        <FormInputRadio
          options={[
            { label: "Yes", value: "true" },
            { label: "No", value: "false" },
          ]}
          label="Food"
          name="food"
          containerClassName="flex-row items-center gap-x-10"
          optionsWrapperClassName="flex-row"
        />
        <FormInputRadio
          options={[
            { label: "Yes", value: "true" },
            { label: "No", value: "false" },
          ]}
          label="Accommodation"
          name="accommodation"
          containerClassName="flex-row items-center gap-x-10"
          optionsWrapperClassName="flex-row"
        />
        <FormInputRadio
          options={[
            { label: "Yes", value: "true" },
            { label: "No", value: "false" },
          ]}
          label="Transportation"
          name="transportation"
          containerClassName="flex-row items-center gap-x-10"
          optionsWrapperClassName="flex-row"
        />
      </div>

      <div className="grid grid-cols-2 gap-6">
        <FormInputRadio
          options={[
            { label: "Yes", value: "true" },
            { label: "No", value: "false" },
          ]}
          label="Free Visa"
          name="free_visa"
          containerClassName="flex-row items-center gap-x-10"
          optionsWrapperClassName="flex-row"
        />
        <FormInputRadio
          options={[
            { label: "Yes", value: "true" },
            { label: "No", value: "false" },
          ]}
          label="Free Ticket"
          name="free_ticket"
          containerClassName="flex-row items-center gap-x-10"
          optionsWrapperClassName="flex-row"
        />
      </div>
      <div className="grid grid-cols-2 gap-6">
        <InputText
          label="Working Hours"
          name="chalanNumber"
          placeholder="Enter your Chalani Number"
        />
        <FormInputRadio
          options={[
            { label: "Yes", value: "true" },
            { label: "No", value: "false" },
          ]}
          label="Over Time"
          name="overtime"
          containerClassName="flex-row items-center gap-x-10"
          optionsWrapperClassName="flex-row"
        />
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
        <FormInputRadio
          options={[
            { label: "Yes", value: "true" },
            { label: "No", value: "false" },
          ]}
          label="Experience"
          name="experience"
        />
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
        <FormInputRadio
          options={[
            { label: "Yes", value: "true" },
            { label: "No", value: "false" },
          ]}
          label="Foreign Employment"
          name="foreign_employment"
          containerClassName="flex-row items-center gap-x-10"
          optionsWrapperClassName="flex-row"
        />
        <FormInputRadio
          options={[
            { label: "Yes", value: "true" },
            { label: "No", value: "false" },
          ]}
          label="Sync With Job Portal"
          name="sync"
          containerClassName="flex-row items-center gap-x-10"
          optionsWrapperClassName="flex-row"
        />
      </div>
    </div>
  );
};
