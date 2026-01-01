import PageHeader from "@/common/PageHeader";
import SearchFilter from "@/components/search-filter";
import { PATH } from "@/constant/path";
import { useNavigate } from "react-router-dom";

const Expense = () => {
  const navigate = useNavigate();
  return (
    <div className="u-flex-parent">
      <PageHeader title="Expense" />
      <SearchFilter
        dateFilter
        handleAddClick={() => {
          navigate(PATH.expense.create);
        }}
      />
    </div>
  );
};

export default Expense;
