import ExtendedForm from "@/components/extended-components/ExtendedForm";
import useCreateShram from "../hooks/use-create-shram";
import ShramForm from "./shram-form";

const CreateShram = () => {
  const { formik, isLoading } = useCreateShram();
  return (
    <ExtendedForm formik={formik} isSubmitting={isLoading}>
      <ShramForm />
    </ExtendedForm>
  );
};

export default CreateShram;
