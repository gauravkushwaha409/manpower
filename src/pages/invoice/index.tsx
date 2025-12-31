import PageHeader from "@/common/PageHeader";
import SearchFilter from "@/components/search-filter";
import InvoiceTable from "./partials/invoice-table";

const Invoice = () => {
  return (
    <div className="u-flex-parent">
      <PageHeader title="Invoice" />
      <SearchFilter dateFilter />
      <InvoiceTable />
    </div>
  );
};

export default Invoice;
