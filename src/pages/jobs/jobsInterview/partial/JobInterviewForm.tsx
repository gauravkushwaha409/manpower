import { FormikProps, FormikProvider } from "formik";
import React from "react";
import InputText from "@/components/form/InputText";
import { InputSearchSelect } from "@/components/form/InputSelect";
import TextEditor from "@/components/ui/TextEditor";
import { InputTime } from "@/components/ui/FormComponent";
import InputDate from "@/components/form/InputDate";
import { IJobInterview } from "../interface/IJobInterview";

interface IProps {
  formik: FormikProps<IJobInterview>;
  isUpdate?: boolean;
}

const JobInterviewForm: React.FC<IProps> = ({ formik, isUpdate }) => {
  return (
    <FormikProvider value={formik}>
      <form
        onSubmit={formik.handleSubmit}
        className="space-y-4 gird grid-cols-2"
      >
        <div className="flex flex-col gap-5">
          {/* First Row */}
          <div className="grid grid-cols-2 gap-8">
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
          <div className="grid grid-cols-2 gap-8">
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
          <div className="grid grid-cols-3 gap-8">
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
            <TextEditor name="remarks" />
          </div>
        </div>

        {/* Button */}
        <div className="mt-8 flex items-center justify-end">
          <button
            type="submit"
            className="typography-button-text px-5 py-3 bg-Blue-400 rounded-lg"
          >
            {isUpdate ? "Update Job Interview" : "Add Job Interview"}
          </button>
        </div>
      </form>
    </FormikProvider>
  );
};

export default JobInterviewForm;
