import InputDate from "@/components/form/form-input-date";
import FormSelect from "@/components/form/form-input-select";
import InputText from "@/components/form/FormInputText";
import FormInputPdf from "@/components/form/FormInputPdf";
import { CircleX, FileIcon, Plus } from "lucide-react";
import FormSwitch from "@/components/form/FormSwitch";
import { useFormikContext } from "formik";
import {
  PreApprovalDofeFormType,
  PreApprovalJobDetails,
} from "../schema/preApprovalDofeValidationSchema";
import React, { useRef } from "react";
import { cn } from "@/lib/utils";

export const PreApprovalFormStep1 = () => {
  const formik = useFormikContext<PreApprovalDofeFormType>();
  const fileInputRef = useRef<{ reset: () => void }>(null);
  const handleAddDocument = () => {
    const { document, document_type } = formik.values;

    if (!document_type || !document) return;

    // Add to documents array
    formik.setValues({
      ...formik.values,
      documents: [
        ...(formik.values.documents || []),
        { document, document_type },
      ],
      document_type: "", // clear select
      document: "", // optional for state
    });

    // Reset the file input visually
    fileInputRef.current?.reset();
  };

  const handleRemoveDocument = (index: number) => {
    formik.setValues({
      ...formik.values,
      documents:
        formik.values.documents &&
        formik.values.documents.filter((_, i) => i !== index),
    });
  };

  return (
    <div className="space-y-6">
      <div className="col-span-2 grid grid-cols-4 gap-8">
        <FormSelect
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
        <FormSelect
          label="Recuirtment Company"
          name="recuirtment_company"
          options={[{ label: "Dome Infosys", value: "dome_infosys" }]}
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
        <InputDate label="Pre Approval Date" name="pre_approval_date" />
        <InputDate label="Pre Approval Validity" name="pre_approval_validity" />
        <InputText label="Pre LT number" name="pre_lt_number" />
        <InputText label="Chalani Number" name="chalani_number" />
      </div>

      {/* Documents */}
      <div className="grid grid-cols-2 gap-6">
        <FormSelect
          label="Document Type"
          name="document_type"
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
          name="document"
          handleDeleteRef={fileInputRef}
        />
      </div>

      <div className="col-span-2">
        <Button varient="add" handleClick={handleAddDocument}>
          <Plus size={26} className="text-white rounded-lg" />
          ADD
        </Button>
      </div>

      <div className="col-span-2 flex gap-x-4">
        {formik?.values?.documents &&
          formik?.values?.documents.map((item, index) => (
            <div
              title={item.document_type}
              className="w-20 relative flex flex-col items-center overflow-hidden"
            >
              <FileIcon size={30} />
              <p className="typography-caption-c2 flex flex-col">
                <span className="line-clamp-1">
                  {(item?.document instanceof File && item?.document?.name) ||
                    "file"}
                </span>
              </p>

              <button
                className="absolute top-0 right-0 cursor-pointer rounded-full hover:bg-gray-100"
                onClick={(e) => {
                  e.preventDefault();
                  handleRemoveDocument(index);
                }}
              >
                <CircleX size={16} className="text-red-500" />
              </button>
            </div>
          ))}
      </div>
    </div>
  );
};

export const PreApprovalFormStep2 = () => {
  const { values, setValues } = useFormikContext<PreApprovalDofeFormType>();
  const handleAddJob = () => {
    setValues({
      ...values,
      job_details: [
        ...values?.job_details,
        {
          job_title: values?.job_title,
          male: values?.male,
          female: values?.female,
          basic_salary_nrp: values?.basic_salary_nrp,
          basic_salary_aed: values?.basic_salary_aed,
          contract_period: values?.contract_period,
          working_city: values?.working_city,
          working_days: values?.working_days,
          working_hours: values?.working_hours,
          experience: values?.experience,
          qualification: values?.qualification,
          years: values?.years,
        },
      ],

      job_title: "",
      male: 0,
      female: 0,
      basic_salary_nrp: 0,
      basic_salary_aed: 0,
      contract_period: 0,
      working_city: "",
      working_days: 0,
      working_hours: 0,
      experience: false,
      qualification: "",
      years: 0,
    });
  };
  return (
    <div className="space-y-6">
      <p>Job Details</p>
      <div className="space-y-4">
        <div className="grid grid-cols-3 gap-6">
          <FormSelect
            label="Job Title"
            name="job_title"
            options={[
              { label: "QA", value: "qa" },
              { label: "BA", value: "ba" },
            ]}
          />
          <div className="grid grid-cols-2 gap-x-4">
            <InputText label="Male" name="male" />
            <InputText label="Female" name="female" />
          </div>
          <div className="grid grid-cols-2 gap-x-4">
            <InputText label="Basic Salary (AED)" name="basic_salary_aed" />
            <InputText label="Basic Salary (NRP)" name="basic_salary_nrp" />
          </div>
        </div>

        <div className="grid grid-cols-4 gap-6">
          <InputText
            label="Working Hours"
            name="working_hours"
            placeholder=""
          />
          <InputText label="Working Days" name="working_days" placeholder="" />
          <InputText
            label="Contract Period (Years)"
            name="contract_period"
            placeholder=""
          />
          <InputText label="Working City" name="working_city" />
          <div className="grid grid-cols-2">
            <FormSwitch title="Experience" name="experience" />
            {values?.experience ? (
              <InputText label="In (Years)" name="years" />
            ) : null}
          </div>
          <FormSelect
            label="Academic Qualification"
            name="qualification"
            options={[
              { label: "Below 10", value: "below 10" },
              { label: "10", value: "10" },
              { label: "+2", value: "+2" },
              { label: "Bachelor", value: "bachelor" },
              { label: "Master Degree", value: "master degree" },
              { label: "PHD", value: "phd" },
            ]}
          />
          <div className="w-fit">
            <Button varient="add" handleClick={handleAddJob}>
              Add Job
            </Button>
          </div>
        </div>
      </div>

      <JobTable />
    </div>
  );
};

// Step - 3 Form
export const PreApprovalFormStep3 = () => {
  return (
    <div className="grid grid-cols-6 gap-6">
      <FormSwitch title="Food" name="food" />
      <FormSwitch title="Accommodation" name="accomodation" />
      <FormSwitch title="Transportation" name="transportation" />
      <FormSwitch title="Free Visa" name="free_visa" />
      <FormSwitch title="Free Ticket" name="free_ticket" />
      <FormSwitch title="Over Time" name="overtime" />
    </div>
  );
};

// Button Varient used in this form
type ButtonVarient = "add" | "delete";
const Button = ({
  children,
  handleClick,
  varient,
}: {
  children: React.ReactNode;
  handleClick: () => void;
  varient: ButtonVarient;
}) => {
  const baseStyle =
    "px-3 py-1 flex items-center typo-mid-bd-reg rounded-4xl cursor-pointer";

  const varients: Record<ButtonVarient, string> = {
    add: "text-white bg-secondary-500 hover:bg-secondary-700",
    delete: "text-white bg-error-delete",
  };
  return (
    <button
      onClick={(e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        handleClick();
      }}
      className={cn(baseStyle, varients[varient], "")}
    >
      {children}
    </button>
  );
};

// JOb Details Table
const JobTable = () => {
  const formik = useFormikContext<PreApprovalDofeFormType>();
  const jobDetails: Record<string, keyof PreApprovalJobDetails> = {
    "Job Title": "job_title",
    Male: "male",
    Female: "female",
    "Basic Salary (AED)": "basic_salary_aed",
    "Basic Salary (NRP)": "basic_salary_nrp",
    "Working Hours": "working_hours",
    "Working Days": "working_days",
    "Contract Period": "contract_period",
    "Working City": "working_city",
    Experience: "experience",
    "Academic Qualification": "qualification",
  };

  return (
    <div className="mt-10 w-full overflow-x-auto">
      <table className="table-auto w-full border-collapse">
        {/* Header */}
        <thead className="bg-gray-100 border-b border-gray-200 sticky top-0">
          <tr>
            <td className="typo-mid-bd-reg text-text-500 px-5 py-3 whitespace-nowrap">
              S.N.
            </td>
            {Object.keys(jobDetails).map((item) => (
              <td
                key={item}
                className="typo-mid-bd-reg text-text-500 px-5 py-3 whitespace-nowrap"
              >
                {item}
              </td>
            ))}
          </tr>
        </thead>

        {/* Body */}
        {formik?.values?.job_details?.length > 0 ? (
          <tbody className="divide-y divide-gray-200">
            {formik.values?.job_details?.map((item, rowIndex) => (
              <tr key={rowIndex} className="hover:bg-gray-50 transition-colors">
                <td className="px-5 py-3 text-sm text-gray-700">
                  {rowIndex + 1}
                </td>
                {Object.values(jobDetails).map((key) => (
                  <td
                    key={String(key)}
                    className="px-5 py-3 text-sm text-gray-700 whitespace-nowrap"
                  >
                    <span>{key === "experience" ? "Required" : item[key]}</span>
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        ) : (
          <tbody>
            <tr>
              <td colSpan={12} className="text-center text-xl">
                No Job Found <br /> Add Job From Above Form
              </td>
            </tr>
          </tbody>
        )}
      </table>
    </div>
  );
};
