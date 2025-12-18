import InputDate from "@/components/form/FormInputDate";
import { InputSearchSelect } from "@/components/form/InputSelect";
import InputText from "@/components/form/FormInputText";
import FormInputPdf from "@/components/form/FormInputPdf";
import { CircleX, FileIcon, Plus } from "lucide-react";
import FormSwitch from "@/components/form/FormSwitch";

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
        />
        <InputSearchSelect
          label="Recuirtment Company"
          name="company"
          options={[]}
        />
        <InputText
          label="Pre Approval Certifcate Number"
          name="pre_approval_certificate_number"
        />
        <FormInputPdf
          label="Pre Approval Certifcate Pdf"
          name="pre_approval_certificate_pdf"
        />
      </div>

      <div className="col-span-2 grid grid-cols-4 gap-6">
        <InputDate label="Pre Approval Date" name="preApprovalDate" />
        <InputDate label="Pre Approval Validity" name="preApprovalValidity" />
        <InputText label="Pre LT number" name="ltNumber" />
        <InputText label="Chalani Number" name="chalanNumber" />
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
      <div className="grid grid-cols-3 gap-6">
        <InputSearchSelect
          label="Job Title"
          name="job_title"
          options={[
            { label: "QA", value: "qa" },
            { label: "BA", value: "ba" },
          ]}
        />
        <div className="grid grid-cols-2 gap-x-4">
          <InputText label="Male" name="no_of_male" />
          <InputText label="Female" name="no_of_female" />
        </div>
        <div className="grid grid-cols-2 gap-x-4">
          <InputText label="Basic Salary (AED)" name="basic_salary_aed" />
          <InputText label="Basic Salary (NRP)" name="basic_salary_nrp" />
        </div>
      </div>

      <div className="grid grid-cols-4 gap-6">
        <InputText label="Working Hours" name="working_hours" placeholder="" />
        <InputText label="Working Days" name="working_days" placeholder="" />
        <InputText
          label="Contract Period (Years)"
          name="contract_period"
          placeholder=""
        />
        <InputText label="Working City" name="working_city" />
        <div className="grid grid-cols-2">
          <FormSwitch title="Experience" name="experience" />
          <InputText label="In (Years)" name="experience" />
        </div>
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

      <div className="grid grid-cols-6 gap-6">
        <FormSwitch title="Food" name="food" />
        <FormSwitch title="Accommodation" name="accommodation" />
        <FormSwitch title="Transportation" name="transportation" />
        <FormSwitch title="Free Visa" name="free_visa" />
        <FormSwitch title="Free Ticket" name="free_visa_ticket" />
        <FormSwitch title="Over Time" name="over_time" />
      </div>
    </div>
  );
};
