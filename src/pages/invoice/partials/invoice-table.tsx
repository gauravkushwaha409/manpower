import TableWrapper from "@/components/TableWrapper";
import useInvoiceList from "../hooks/use-invoice-list";
import Table from "@/components/Table";
import InvoiceColumns, { invoiceData } from "./invoice-columns";

const InvoiceTable = () => {
  const { invoiceListResponse, isLoading, rowSelection, setRowSelection } =
    useInvoiceList();
  return (
    <TableWrapper wrapperClassName="mt-4" isLoading={isLoading}>
      <Table
        columns={InvoiceColumns()}
        data={invoiceListResponse?.data?.records || invoiceData}
        rowSelection={rowSelection}
        setRowSelection={setRowSelection}
      />
    </TableWrapper>
  );
};

export default InvoiceTable;
