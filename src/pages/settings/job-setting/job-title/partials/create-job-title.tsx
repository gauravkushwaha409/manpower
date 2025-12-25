import ExtendedForm from "@/components/extended-components/ExtendedForm";
import useCreateJobTitle from "../hooks/use-create-job-title";
import JobTitleForm from "./job-title-form";

const CreateJobTitle = () => {
  const { formik, isLoading } = useCreateJobTitle();
  return (
    <ExtendedForm formik={formik} isSubmitting={isLoading}>
      <JobTitleForm />
    </ExtendedForm>
  );
};

export default CreateJobTitle;
