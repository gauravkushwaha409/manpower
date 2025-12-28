import ExtendedForm from "@/components/extended-components/ExtendedForm";
import useCreateInterview from "../hooks/use-create-interview";
import InterviewForm from "./interview-form";

const CreateInterview = () => {
  const { formik, isLoading } = useCreateInterview();
  return (
    <ExtendedForm formik={formik} isSubmitting={isLoading}>
      <InterviewForm />
    </ExtendedForm>
  );
};

export default CreateInterview;
