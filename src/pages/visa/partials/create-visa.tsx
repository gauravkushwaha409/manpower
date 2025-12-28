import ExtendedForm from "@/components/extended-components/ExtendedForm";
import useCreateVisa from "../hooks/use-create-visa";
import VisaForm from "./visa-form";

const CreateVisa = () => {
  const { formik, isLoading } = useCreateVisa();
  return (
    <ExtendedForm formik={formik} isSubmitting={isLoading}>
      <VisaForm />
    </ExtendedForm>
  );
};

export default CreateVisa;
