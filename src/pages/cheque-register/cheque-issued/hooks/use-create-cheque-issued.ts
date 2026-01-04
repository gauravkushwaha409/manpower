import { useFormik } from "formik";
import { ChequeIssuedSchemaType } from "../schema/cheque-issued-schema";

const INITIAL_VALUES: ChequeIssuedSchemaType = {
  account: "",
  amount: "",
  bank_account: "",
  cheque_date: "",
  cheque_number: "",
  issued_date: "",
  payee_name: "",
  status: null,
};

const useCreateChequeIssued = () => {
  const formik = useFormik({
    initialValues: INITIAL_VALUES,
    onSubmit: () => {},
  });
  return { formik };
};

export default useCreateChequeIssued;
