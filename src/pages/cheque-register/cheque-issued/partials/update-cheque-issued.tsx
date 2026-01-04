import ExtendedForm from "@/components/extended-components/ExtendedForm";
import ChequeIssuedForm from "./cheque-issued-form";
import useUpdateChequeIssued from "../hooks/use-update-cheque-issued";

const UpdateChequeIssued = () => {
  const chequeIssued = useUpdateChequeIssued();

  return (
    <ExtendedForm formik={chequeIssued.formik}>
      <ChequeIssuedForm />
    </ExtendedForm>
  );
};

export default UpdateChequeIssued;
