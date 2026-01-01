import PageHeader from "@/common/PageHeader";
import SearchFilter from "@/components/search-filter";
import { PATH } from "@/constant/path";
import { useNavigate } from "react-router-dom";
import ExpenseTable from "./partials/expense-table";
import ExpenseModal from "./partials/expense-modal";

const Expense = () => {
  const navigate = useNavigate();
  console.log("re-render");
  return (
    <div className="u-flex-parent">
      <PageHeader title="Expense" />
      <SearchFilter
        dateFilter
        handleAddClick={() => {
          navigate(PATH.expense.create);
        }}
      />
      <ExpenseTable />

      {/* ====================== Modal of Expense ================= */}
      <ExpenseModal />
    </div>
  );
};

export default Expense;
