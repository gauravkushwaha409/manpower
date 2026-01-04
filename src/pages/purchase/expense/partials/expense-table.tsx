import TableWrapper from "@/components/TableWrapper";
import useExpenseList from "../hooks/use-expense-list";
import Table from "@/components/Table";
import ExpenseColumn, { expenseListData } from "./expense-column";

const ExpenseTable = () => {
  const expenseList = useExpenseList();
  return (
    <TableWrapper
      isLoading={expenseList.isLoading}
      isDataAvailable={
        // expenseList.expenseListResponse?.data?.records?.length > 0
        true
      }
      wrapperClassName="mt-4"
    >
      <Table
        columns={ExpenseColumn()}
        data={expenseListData}
        getRowId={(row) => row?.id}
        rowSelection={expenseList.rowSelection}
        setRowSelection={expenseList.setRowSelection}
        totalItems={expenseList?.expenseListResponse?.data?.totalRecords}
        totalPages={expenseList?.expenseListResponse?.data?.totalPages}
      />
    </TableWrapper>
  );
};

export default ExpenseTable;
