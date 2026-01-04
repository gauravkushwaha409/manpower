import ExtendedForm from "@/components/extended-components/ExtendedForm";
import ChequeIssuedForm from "./cheque-issued-form";
import useCreateChequeIssued from "../hooks/use-create-cheque-issued";

const CreateChequeIssued = () => {
  const chequeIssued = useCreateChequeIssued();

  return (
    <ExtendedForm formik={chequeIssued.formik}>
      <ChequeIssuedForm />
    </ExtendedForm>
  );
};

export default CreateChequeIssued;
