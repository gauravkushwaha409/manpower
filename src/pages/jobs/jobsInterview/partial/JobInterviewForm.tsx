import React from "react";
import InputText from "@/components/form/FormInputText";
import { InputSearchSelect } from "@/components/form/InputSelect";
import TextEditor from "@/components/form/TextEditor";
import { InputTime } from "@/components/ui/FormComponent";
import InputDate from "@/components/form/FormInputDate";

const JobInterviewForm: React.FC = () => {
  return (
    <div className="flex flex-col gap-5">
      <div className="gap-8 grid grid-cols-2">
        <InputText
          label="Company Name"
          name="company_name"
          placeholder="Enter Company Name"
        />

        <div>{/* Empty div for layout */}</div>

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
          label="Job Vacancy"
          name="job_vacancy"
          options={[
            { value: "", label: "Select Job Vacancy" },
            { value: "Developer", label: "Developer" },
            { value: "Designer", label: "Designer" },
            { value: "Manager", label: "Manager" },
          ]}
        />
      </div>

      {/* Second Row */}
      <div className="gap-8 grid grid-cols-2">
        <InputText
          label="Interviewer"
          name="interviewer"
          placeholder="Enter Interviewer Name"
        />

        <InputText
          label="Salary Offered"
          name="salaryOffered"
          type="number"
          placeholder="Enter Salary Offered"
        />
      </div>

      {/* Third Row */}
      <div className="gap-8 grid grid-cols-3">
        <InputDate label="Date" name="date" />

        <InputTime label="Time" name="time" />

        <InputSearchSelect
          label="Status"
          name="status"
          options={[
            { value: "", label: "Select Status" },
            { value: "Pending", label: "Pending" },
            { value: "Accepted", label: "Accepted" },
            { value: "Rejected", label: "Rejected" },
          ]}
        />
      </div>

      {/* Remarks */}
      <div className="flex flex-col gap-2">
        <label className="typography-p2-regular" htmlFor="remarks">
          Remarks
        </label>
        <TextEditor name="remarks" label="Remarks" />
      </div>
    </div>
  );
};

export default JobInterviewForm;
