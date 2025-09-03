import { FormikProps, FormikProvider } from "formik";
import React from "react";
import InputText from "@/components/form/InputText";
import { IJobCategory } from "../interface/IJobCategory";
import TextEditor from "@/components/ui/TextEditor";

interface IProps {
  formik: FormikProps<IJobCategory>;
  isUpdate?: boolean;
}

const JobCategoryForm: React.FC<IProps> = ({ formik, isUpdate }) => {
  return (
    <FormikProvider value={formik}>
      <form
        onSubmit={formik.handleSubmit}
        className="space-y-4 gird grid-cols-2"
      >
        <div className="flex flex-col gap-4">
          <InputText
            label="Job Title"
            name="title"
            placeholder="Enter job Title"
          />
          <div className="flex flex-col gap-2">
            <label className="typography-p2-regular" htmlFor="description">
              Description
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
            {isUpdate ? "Update Job Category" : "Add Job Category"}
          </button>
        </div>
      </form>
    </FormikProvider>
  );
};

export default JobCategoryForm;
