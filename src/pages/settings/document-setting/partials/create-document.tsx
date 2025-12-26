import ExtendedForm from "@/components/extended-components/ExtendedForm";
import useCreateDocument from "../hooks/use-create-document";
import DocumentForm from "./document-form";

const CreateDocument = () => {
  const { formik, isLoading } = useCreateDocument();

  return (
    <ExtendedForm formik={formik} isSubmitting={isLoading}>
      <DocumentForm />
    </ExtendedForm>
  );
};
export default CreateDocument;
