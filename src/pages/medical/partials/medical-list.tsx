import TableWrapper from "@/components/TableWrapper";
import Table from "@/components/Table";
import useMedicalList from "../hooks/use-medical-list";
import MedicalColumns, { medicalData } from "./medical-column";

const MedicalTable = () => {
  const medicalList = useMedicalList();
  return (
    <TableWrapper wrapperClassName="mt-4" isLoading={false}>
      <Table
        columns={MedicalColumns()}
        data={medicalData}
        rowSelection={medicalList.rowSelection}
        setRowSelection={medicalList.setRowSelection}
      />
    </TableWrapper>
  );
};

export default MedicalTable;
