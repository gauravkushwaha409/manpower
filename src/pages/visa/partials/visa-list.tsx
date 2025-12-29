import TableWrapper from "@/components/TableWrapper";
import Table from "@/components/Table";
import VisaColumns, { visaData } from "./visa-column";
import useVisaList from "../hooks/use-visa-list";

const VisaTable = () => {
  const visaList = useVisaList();
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
