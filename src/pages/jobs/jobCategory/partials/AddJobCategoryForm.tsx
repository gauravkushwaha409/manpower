import React from "react";
import { FormikProvider } from "formik";
import TextEditor from "@/components/ui/TextEditor";
import InputText from "@/components/form/InputText";
import useCreateJobCategory from "../hooks/useCreateJobCategory";

// interface IJobCategoryForm {
//   jobTitle: string;
//   description: string;
// }

const AddJobCategoryForm: React.FC = () => {
  //   const initialValues: IJobCategoryForm = {
  //     jobTitle: "",
  //     description: "",
  //   };

  //   const validationSchema = Yup.object().shape({
  //     jobTitle: Yup.string()
  //       .required("Job title is required")
  //       .min(5, "Job title must be at least 5 characters"),
  //     description: Yup.string()
  //       .required("Description is required")
  //       .min(10, "Description must be at least 10 characters"),
  //   });

  //   const onSubmit = (values: IJobCategoryForm) => {
  //     console.log(values);
  //   };

  const { addJobCategoriesFormik, isJobCategoryLoading } =
    useCreateJobCategory();

  return (
    <div>
      <FormikProvider value={addJobCategoriesFormik}>
        {/* initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit} */}
        {/* {({ isSubmitting }) =>  */}(
        <form className="mt-4">
          <div className="flex flex-col gap-5">
            {/* Job Title */}
            <InputText
              label="Job Title"
              name="jobTitle"
              placeholder="Enter job Title"
            />

            {/* Description */}
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
              disabled={isJobCategoryLoading}
              className="typography-button-text px-5 py-3 bg-Blue-400 rounded-lg"
            >
              {isJobCategoryLoading ? "Saving..." : "Save Changes"}
            </button>
          </div>
        </form>
      </FormikProvider>
    </div>
  );
};

export default AddJobCategoryForm;
