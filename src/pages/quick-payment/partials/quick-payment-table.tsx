import Table from "@/components/Table";
import TableWrapper from "@/components/TableWrapper";
import useQuickPaymentList from "../hooks/use-quick-payment-list";
import QuickPaymentColumns, { quickPaymentData } from "./quick-payment-column";

const QuickPaymentTable = () => {
  const quickPayment = useQuickPaymentList();
  return (
    <TableWrapper
      isDataAvailable={
        // quickPayment?.quickPaymentListResponse?.data?.records?.length > 0
        true
      }
      isLoading={quickPayment.isLoading}
    >
      <Table
        columns={QuickPaymentColumns()}
        data={quickPaymentData}
        getRowId={(row) => row?.id}
        rowSelection={quickPayment.rowSelection}
        setRowSelection={quickPayment.setRowSelection}
      />
    </TableWrapper>
  );
};
export default QuickPaymentTable;
