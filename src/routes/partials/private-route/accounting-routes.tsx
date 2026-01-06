import { PATH } from "@/constant/path";
import Expense from "@/pages/purchase/expense";
import CreateExpense from "@/pages/purchase/expense/child/create-expense";
import UpdateExpense from "@/pages/purchase/expense/child/update-expense";
import Supplier from "@/pages/purchase/supplier";
import ChequeRegister from "@/pages/cheque-register";
import ChequeIssued from "@/pages/cheque-register/cheque-issued";
import ChequeReceived from "@/pages/cheque-register/cheque-received";

export const accountingRoutes = [
  // =================== Supplier Routes =================
  {
    path: PATH.accounting.purchase.supplier.index,
    element: <Supplier />,
  },

  // ===================== Expense Routes ===================
  {
    path: PATH.accounting.purchase.expense.index,
    element: <Expense />,
  },
  {
    path: PATH.accounting.purchase.expense.create,
    element: <CreateExpense />,
  },
  {
    path: PATH.accounting.purchase.expense.update,
    element: <UpdateExpense />,
  },

  // ================== Cheque Register Routes =================
  {
    path: PATH.accounting.chequeRegister.index,
    element: <ChequeRegister />,
    children: [
      {
        path: PATH.accounting.chequeRegister.chequeIssued.index,
        element: <ChequeIssued />,
      },
      {
        path: PATH.accounting.chequeRegister.chequeReceived.index,
        element: <ChequeReceived />,
      },
    ],
  },
];
