import Table from "@/components/Table";
import TableWrapper from "@/components/TableWrapper";
import useMedicalInstituteList from "../hooks/use-medical-institute-list";
import MedicalInstituteColumns, {
  medicalInstituteData,
} from "./medical-institute-columns";

export default function MedicalInstituteTable() {
  const insuranceCompanyList = useMedicalInstituteList();
  return (
    <TableWrapper
      wrapperClassName="mt-4"
      isLoading={false}
      isDataAvailable={true}
    >
      <Table
        columns={MedicalInstituteColumns()}
        data={medicalInstituteData}
        getRowId={(row) => row.id}
        rowSelection={insuranceCompanyList.rowSelection}
        setRowSelection={insuranceCompanyList.setRowSelection}
      />
    </TableWrapper>
  );
}
