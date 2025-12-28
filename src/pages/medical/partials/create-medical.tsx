import ExtendedForm from "@/components/extended-components/ExtendedForm";
import useCreateMedical from "../hooks/use-create-medical";
import MedicalForm from "./medical-form";

const CreateMedical = () => {
  const { formik, isLoading } = useCreateMedical();
  return (
    <ExtendedForm formik={formik} isSubmitting={isLoading}>
      <MedicalForm />
    </ExtendedForm>
  );
};

export default CreateMedical;
