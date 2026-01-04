import ExtendedForm from "@/components/extended-components/ExtendedForm";
import ChequeReceivedForm from "./cheque-received-form";
import useUpdateChequeReceived from "../hooks/use-update-cheque-received";

const UpdateChequeReceived = () => {
  const chequeReceived = useUpdateChequeReceived();
  return (
    <ExtendedForm formik={chequeReceived.formik}>
      <ChequeReceivedForm />
    </ExtendedForm>
  );
};

export default UpdateChequeReceived;
