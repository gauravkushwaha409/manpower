import Table from "@/components/Table";
import TableWrapper from "@/components/TableWrapper";
import useChartOfAccountList from "../hooks/use-chart-of-group-list";
import ChartOfGroupColumn, { chartOfGroupData } from "./chart-of-group-column";

const ChartOfGroupTable = () => {
  const accountTable = useChartOfAccountList();
  return (
    <TableWrapper wrapperClassName="mt-4" isLoading={accountTable?.isLoading}>
      <Table
        columns={ChartOfGroupColumn()}
        data={chartOfGroupData}
        rowSelection={accountTable?.rowSelection}
        setRowSelection={accountTable?.setRowSelection}
        totalItems={accountTable?.chartOfGroupListResponse?.data?.totalRecords}
        totalPages={accountTable?.chartOfGroupListResponse?.data?.totalPages}
        getRowId={(row) => {
          return row?.id;
        }}
      />
    </TableWrapper>
  );
};

export default ChartOfGroupTable;
