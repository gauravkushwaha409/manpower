import Table from "@/components/Table";
import TableWrapper from "@/components/TableWrapper";
import useChartOfAccountList from "../hooks/use-chart-of-account-list";
import ChartOfAccountColumn, { chartOfAccountData } from "./chart-of-account-column";

const ChartOfAccountTable = () => {
  const accountTable = useChartOfAccountList();
  return (
    <TableWrapper wrapperClassName="mt-4" isLoading={accountTable?.isLoading}>
      <Table
        columns={ChartOfAccountColumn()}
        data={chartOfAccountData}
        rowSelection={accountTable?.rowSelection}
        setRowSelection={accountTable?.setRowSelection}
        totalItems={
          accountTable?.chartOfAccountListResponse?.data?.totalRecords
        }
        totalPages={accountTable?.chartOfAccountListResponse?.data?.totalPages}
        getRowId={(row) => {
          return row?.id;
        }}
      />
    </TableWrapper>
  );
};

export default ChartOfAccountTable;
