import { PATH } from "@/constant/path";
import ChequeIssued from "@/pages/cheque-register/cheque-issued";
import ChequeReceived from "@/pages/cheque-register/cheque-received";

export const chequeRegistered = [
  {
    path: PATH.chequeRegister.chequeIssued.index,
    element: <ChequeIssued />,
  },
  {
    path: PATH.chequeRegister.chequeReceived.index,
    element: <ChequeReceived />,
  },
];
