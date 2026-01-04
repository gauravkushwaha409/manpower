import ExtendedForm from "@/components/extended-components/ExtendedForm";
import ChequeReceivedForm from "./cheque-received-form";
import useCreateChequeReceived from "../hooks/use-create-cheque-received";

const CreateChequeReceived = () => {
  const chequeReceived = useCreateChequeReceived();
  return (
    <ExtendedForm formik={chequeReceived.formik}>
      <ChequeReceivedForm />
    </ExtendedForm>
  );
};

export default CreateChequeReceived;
