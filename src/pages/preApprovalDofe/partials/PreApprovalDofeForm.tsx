import InputDate from "@/components/form/FormInputDate";
import { InputSearchSelect } from "@/components/form/InputSelect";
import InputText from "@/components/form/FormInputText";
import FormInputPdf from "@/components/form/FormInputPdf";
import { CircleX, FileIcon, Plus, Trash } from "lucide-react";
import FormSwitch from "@/components/form/FormSwitch";
import { FieldArray, useFormikContext } from "formik";
import { PreApprovalDofeFormType } from "../schema/preApprovalDofeValidationSchema";
import { useRef } from "react";

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
        <InputSearchSelect
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
        <button
          onClick={(e) => {
            e.preventDefault();
            handleAddDocument();
          }}
          className="inline-flex items-center gap-2 rounded-md px-4 py-2 text-sm font-medium text-white bg-primary-500 hover:bg-primary-600 focus:outline-none focus:ring-2 focus:ring-primary-300 transition"
        >
          <Plus size={26} className="bg-primary-500 text-white rounded-lg" />
          ADD
        </button>
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
  const { values } = useFormikContext<PreApprovalDofeFormType>();
  return (
    <div className="space-y-6">
      <p>Job Details</p>
      <FieldArray name="job_details">
        {({ push, remove }) =>
          values?.job_details?.map((item, index) => (
            <div className="space-y-4">
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
                  <InputText label="Male" name="male" />
                  <InputText label="Female" name="female" />
                </div>
                <div className="grid grid-cols-2 gap-x-4">
                  <InputText
                    label="Basic Salary (AED)"
                    name="basic_salary_aed"
                  />
                  <InputText
                    label="Basic Salary (NRP)"
                    name="basic_salary_nrp"
                  />
                </div>
              </div>

              <div className="grid grid-cols-4 gap-6">
                <InputText
                  label="Working Hours"
                  name="working_hours"
                  placeholder=""
                />
                <InputText
                  label="Working Days"
                  name="working_days"
                  placeholder=""
                />
                <InputText
                  label="Contract Period (Years)"
                  name="contract_period"
                  placeholder=""
                />
                <InputText label="Working City" name="working_city" />
                <div className="grid grid-cols-2">
                  <FormSwitch title="Experience" name="experience" />
                  {item?.experience ? (
                    <InputText label="In (Years)" name="years" />
                  ) : null}
                </div>
                <InputSearchSelect
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

                {/* Add Delete Jobs */}
                <div className="col-span-2 flex items-center justify-end gap-3">
                  {values?.job_details?.length > 1 && (
                    <button
                      type="button"
                      onClick={(e) => {
                        e.preventDefault();
                        remove(index);
                      }}
                      className="inline-flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium text-red-600 border border-red-200 hover:bg-red-50  focus:outline-none focus:ring-2 focus:ring-red-200 transition"
                    >
                      <Trash size={16} />
                      Remove Job
                    </button>
                  )}

                  {values?.job_details?.length - 1 === index && (
                    <button
                      type="button"
                      onClick={(e) => {
                        e.preventDefault();
                        push({
                          job_title: "",
                          male: 0,
                          female: 0,
                          basic_salary_aed: 0,
                          basic_salary_nrp: 0,
                          working_hours: 0,
                          working_days: 0,
                          contract_period: 0,
                          working_city: "",
                          experience: false,
                          years: 0,
                          qualification: "",
                        });
                      }}
                      className="inline-flex items-center gap-2 rounded-md px-4 py-2 text-sm font-medium text-white bg-primary-500 hover:bg-primary-600 focus:outline-none focus:ring-2 focus:ring-primary-300 transition"
                    >
                      <Plus size={16} />
                      Add Job
                    </button>
                  )}
                </div>
              </div>
            </div>
          ))
        }
      </FieldArray>

      {/* Same field for all the jobs */}
      <div className="grid grid-cols-6 gap-6">
        <FormSwitch title="Food" name="food" />
        <FormSwitch title="Accommodation" name="accomodation" />
        <FormSwitch title="Transportation" name="transportation" />
        <FormSwitch title="Free Visa" name="free_visa" />
        <FormSwitch title="Free Ticket" name="free_ticket" />
        <FormSwitch title="Over Time" name="overtime" />
      </div>
    </div>
  );
};
