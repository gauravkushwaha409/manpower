import { FormikProps, FormikProvider } from "formik";
import React from "react";
import InputText from "@/components/form/InputText";
import { InputSearchSelect } from "@/components/form/InputSelect";
import TextEditor from "@/components/ui/TextEditor";
import { IJobApplicant } from "../interface/IJobApplicant";

interface IProps {
  formik: FormikProps<IJobApplicant>;
  isUpdate?: boolean;
}

const JobApplicantForm: React.FC<IProps> = ({ formik, isUpdate }) => {
  return (
    <FormikProvider value={formik}>
      <form
        onSubmit={formik.handleSubmit}
        className="space-y-4 gird grid-cols-2"
      >
        <div className="flex flex-col gap-5">
          {/* First Row */}
          <div className="grid grid-cols-2 gap-8">
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

          {/* Second Row */}
          <div className="grid grid-cols-2 gap-8">
            <InputText
              label="Company Name"
              name="company_name"
              placeholder="Enter Company Name"
            />
          </div>

          {/* Third Row */}
          <div className="grid grid-cols-2 gap-8">
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

          {/* Remarks */}
          <div className="flex flex-col gap-2">
            <label className="typography-p2-regular" htmlFor="remarks">
              Remarks
            </label>
            <TextEditor name="description" />
          </div>
        </div>

        {/* Button */}
        <div className="mt-8 flex items-center justify-end">
          <button
            type="submit"
            className="typography-button-text px-5 py-3 bg-Blue-400 rounded-lg"
          >
            {isUpdate ? "Update Job Applicant" : "Add Job Applicant"}
          </button>
        </div>
      </form>
    </FormikProvider>
  );
};

export default JobApplicantForm;
