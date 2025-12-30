import TableWrapper from "@/components/TableWrapper";
import Table from "@/components/Table";
import useInsuranceList from "../hooks/use-insurance-list";
import InsuranceColumns, { insuranceData } from "./insurance-column";

const InsuranceTable = () => {
  const insuranceList = useInsuranceList();

  return (
    <TableWrapper wrapperClassName="mt-4" isLoading={false}>
      <Table
        columns={InsuranceColumns()}
        data={insuranceData}
        rowSelection={insuranceList.rowSelection}
        setRowSelection={insuranceList.setRowSelection}
      />
    </TableWrapper>
  );
};

export default InsuranceTable;
