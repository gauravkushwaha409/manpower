import { PATH } from "@/constant/path";
import Expense from "@/pages/expense";
import CreateExpense from "@/pages/expense/child/create-expense";
import UpdateExpense from "@/pages/expense/child/update-expense";

export const expenseRoutes = [
  {
    path: PATH.expense.index,
    element: <Expense />,
  },
  {
    path: PATH.expense.create,
    element: <CreateExpense />,
  },
  {
    path: PATH.expense.update,
    element: <UpdateExpense />,
  },
];
