import { PATH } from "@/constant/path";
import Expense from "@/pages/expense";
import CreateExpense from "@/pages/expense/child/create-expense";
import UpdateExpense from "@/pages/expense/child/update-expense";
import Supplier from "@/pages/purchase/supplier";

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
];
