import React from "react";
import InputText from "@/components/form/FormInputText";
import InputSearchSelect from "@/components/form/form-input-select";
import TextEditor from "@/components/form/TextEditor";

const JobApplicationForm: React.FC = () => {
  return (
    <div className="flex flex-col gap-4">
      <div className="gap-4 grid grid-cols-2">
        <InputSearchSelect
          label="Candidate Name"
          name="candidate_name"
          options={[
            { value: "", label: "Select Candidate" },
            { value: "Gaurav", label: "Gaurav" },
            { value: "Suresh", label: "Suresh" },
            { value: "Suman", label: "Suman" },
            { value: "Prassanna", label: "Prassanna" },
          ]}
        />
        <InputSearchSelect
          label="Country"
          name="country"
          options={[
            { value: "", label: "Select Country" },
            { value: "USA", label: "USA" },
            { value: "Canada", label: "Canada" },
            { value: "UK", label: "UK" },
            { value: "Australia", label: "Australia" },
          ]}
        />
      </div>

      <div className="gap-8 grid grid-cols-2">
        <InputText
          label="Company Name"
          name="company_name"
          placeholder="Enter Company Name"
        />
      </div>

      <div className="gap-8 grid grid-cols-2">
        <InputSearchSelect
          label="Job Vacancy"
          name="job_vacancy"
          options={[
            { value: "", label: "Select Job Vacancy" },
            { value: "Software Engineer", label: "Software Engineer" },
            { value: "Data Analyst", label: "Data Analyst" },
            { value: "Product Manager", label: "Product Manager" },
            { value: "UI/UX Designer", label: "UI/UX Designer" },
          ]}
        />

        <InputSearchSelect
          label="Status"
          name="status"
          options={[
            { value: "", label: "Select Status" },
            { value: "Pending", label: "Pending" },
            { value: "Approved", label: "Approved" },
            { value: "Rejected", label: "Rejected" },
          ]}
        />
      </div>

      <div className="flex flex-col gap-2">
        <label className="typography-p2-regular" htmlFor="remarks">
          Remarks
        </label>
        <TextEditor label="Description" name="description" />
      </div>
    </div>
  );
};

export default JobApplicationForm;
