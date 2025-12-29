import ExtendedForm from "@/components/extended-components/ExtendedForm";
import useCreateOrientation from "../hooks/use-create-orientation";
import OrientationForm from "./orientation-form";

const CreateOrientation = () => {
  const { formik, isLoading } = useCreateOrientation();
  return (
    <ExtendedForm formik={formik} isSubmitting={isLoading}>
      <OrientationForm />
    </ExtendedForm>
  );
};

export default CreateOrientation;
