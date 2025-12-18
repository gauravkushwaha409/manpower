import FormInputRadio from "@/components/form/FormInputRadio";
import InputDate from "@/components/form/FormInputDate";
import { InputSearchSelect } from "@/components/form/InputSelect";
import InputText from "@/components/form/FormInputText";
import FormInputPdf from "@/components/form/FormInputPdf";
import { CircleX, FileIcon, Plus } from "lucide-react";
import TextEditor from "@/components/form/TextEditor";

export const PreApprovalFormStep1 = () => {
  return (
    <div className="space-y-6">
      <div className="col-span-2 grid grid-cols-4 gap-8">
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
          placeholder="Pre Approval Certificate Number"
        />
        <FormInputPdf
          label="Pre Approval Certifcate Pdf"
          name="pre_approval_certificate_pdf"
          placeholder="Enter Pre Approval Certificate PDF"
        />
      </div>

      <div className="col-span-2 grid grid-cols-4 gap-6">
        <InputDate
          label="Pre Approval Date"
          name="preApprovalDate"
          placeholder="Enter your pre approval date"
        />
        <InputDate
          label="Pre Approval Validity"
          name="preApprovalValidity"
          placeholder="Pre Approval validity"
        />
        <InputText
          label="Pre LT number"
          name="ltNumber"
          placeholder="Pre LT number"
        />
        <InputText
          label="Chalani Number"
          name="chalanNumber"
          placeholder="Chalani Number"
        />
      </div>

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
    </div>
  );
};

export const PreApprovalFormStep2 = () => {
  return (
    <div className="space-y-6">
      <p>Job Details</p>
      <div className="grid grid-cols-4 gap-6">
        <InputText
          label="Job Title"
          name="job_title"
          placeholder="Enter your Job Title"
        />
        <div className="grid grid-cols-2 gap-x-4">
          <InputText
            label="Male"
            name="no_of_male"
            placeholder="Enter your no. of male"
          />
          <InputText
            label="Female"
            name="no_of_female"
            placeholder="Enter your no. of female"
          />
        </div>
        <div className="grid grid-cols-2 gap-x-4">
          <InputText
            label="Basic Salary (In)"
            name="basic_salary"
            placeholder="Enter your basic salary"
          />
        </div>

        <div className="col-span-4">
          <TextEditor label="Job Description" name="job_description" />
        </div>
      </div>
      <div className="grid grid-cols-4 gap-6">
        <InputSearchSelect
          label="Food"
          name="food"
          options={[
            {
              label: "Yes",
              value: "Yes",
            },
            { label: "No", value: "No" },
          ]}
          placeholder=""
        />

        <FormInputRadio
          options={[
            { label: "Yes", value: "true" },
            { label: "No", value: "false" },
          ]}
          label="Accommodation"
          name="accommodation"
          containerClassName="flex-row items-center "
          optionsWrapperClassName="flex-row"
        />
        <FormInputRadio
          options={[
            { label: "Yes", value: "true" },
            { label: "No", value: "false" },
          ]}
          label="Transportation"
          name="transportation"
          containerClassName="flex-row items-center "
          optionsWrapperClassName="flex-row"
        />
        <FormInputRadio
          options={[
            { label: "Yes", value: "true" },
            { label: "No", value: "false" },
          ]}
          label="Free Visa"
          name="free_visa"
          containerClassName="flex-row items-center "
          optionsWrapperClassName="flex-row"
        />
      </div>

      <div className="grid grid-cols-4 gap-6">
        <FormInputRadio
          options={[
            { label: "Yes", value: "true" },
            { label: "No", value: "false" },
          ]}
          label="Free Ticket"
          name="free_ticket"
          containerClassName="flex-row items-center "
          optionsWrapperClassName="flex-row"
        />
        <FormInputRadio
          options={[
            { label: "Yes", value: "true" },
            { label: "No", value: "false" },
          ]}
          label="Over Time"
          name="overtime"
          containerClassName="flex-row items-center "
          optionsWrapperClassName="flex-row"
        />
        <FormInputRadio
          options={[
            { label: "Yes", value: "true" },
            { label: "No", value: "false" },
          ]}
          label="Foreign Emp."
          name="foreign_employment"
          containerClassName="flex-row items-center"
          optionsWrapperClassName="flex-row"
        />
        {/* <FormInputRadio
          options={[
            { label: "Yes", value: "true" },
            { label: "No", value: "false" },
          ]}
          label="Sync"
          name="sync"
          containerClassName="flex-row items-center "
          optionsWrapperClassName="flex-row"
        /> */}
        <InputText label="Working Hours" name="working_hours" placeholder="" />
        <InputText label="Working Days" name="working_days" placeholder="" />
        <InputText
          label="Contract Period (Years)"
          name="contract_period"
          placeholder=""
        />
        <InputText
          label="Working City"
          name="working_city"
          placeholder="working city"
        />
        <FormInputRadio
          options={[
            { label: "Yes", value: "true" },
            { label: "No", value: "false" },
          ]}
          label="Experience"
          name="isExperienced"
          containerClassName="flex-row items-center "
          optionsWrapperClassName="flex-row"
        />
        <InputText
          label="If yes (Years)"
          name="experience"
          placeholder="Enter your Chalani Number"
        />
        <InputSearchSelect
          label="Academic Qualification"
          name="academic_qualification"
          options={[
            { label: "Below 10", value: "" },
            { label: "10", value: "" },
            { label: "+2", value: "" },
            { label: "Bachelor", value: "" },
            { label: "Master Degree", value: "" },
            { label: "PHD", value: "" },
            { label: "Gaurantee Letter", value: "" },
          ]}
          placeholder="Select Recuirtment Company"
        />
      </div>
    </div>
  );
};
