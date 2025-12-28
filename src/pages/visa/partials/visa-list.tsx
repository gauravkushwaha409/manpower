import TableWrapper from "@/components/TableWrapper";
import Table from "@/components/Table";
import useMedicalList from "../hooks/use-visa-list";
import VisaColumns, { visaData } from "./visa-column";

const VisaTable = () => {
  const visaList = useMedicalList();
  return (
    <TableWrapper wrapperClassName="mt-4" isLoading={false}>
      <Table
        columns={VisaColumns()}
        data={visaData}
        rowSelection={visaList.rowSelection}
        setRowSelection={visaList.setRowSelection}
      />
    </TableWrapper>
  );
};

export default VisaTable;
