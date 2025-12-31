import PageHeader from "@/common/PageHeader";
import SearchFilter from "@/components/search-filter";
import InvoiceTable from "./partials/invoice-table";
import { useNavigate } from "react-router-dom";
import { PATH } from "@/constant/path";

const Invoice = () => {
  const navigate = useNavigate();
  return (
    <div className="u-flex-parent">
      <PageHeader title="Invoice" />
      <SearchFilter
        dateFilter
        handleAddClick={() => {
          navigate(PATH.invoice.create);
        }}
      />
      <InvoiceTable />
    </div>
  );
};

export default Invoice;
