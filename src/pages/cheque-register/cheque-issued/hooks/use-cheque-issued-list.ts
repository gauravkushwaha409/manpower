import { ChequeIssuedStatusType } from "../schema/cheque-issued-schema";

export interface IChequeIssuedList {
  id: string;
  supplier_name: string;
  payee_name: string;
  cheque_date: string;
  received_date: string;
  amount: string;
  cheque_no: string;
  bank: string;
  status: ChequeIssuedStatusType;
}

const useChequeList = () => {
  return {};
};
export default useChequeList;
