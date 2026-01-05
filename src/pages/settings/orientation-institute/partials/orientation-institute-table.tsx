import Table from "@/components/Table";
import TableWrapper from "@/components/TableWrapper";
import useOrientationInstituteList from "../hooks/use-orientation-institute-list";
import OrientationInstituteColumns, {
  orientationInstituteData,
} from "./orientation-orientation-columns";

export default function OrientationInstituteTable() {
  const insuranceCompanyList = useOrientationInstituteList();
  return (
    <TableWrapper
      wrapperClassName="mt-4"
      isLoading={false}
      isDataAvailable={true}
    >
      <Table
        columns={OrientationInstituteColumns()}
        data={orientationInstituteData}
        getRowId={(row) => row.id}
        rowSelection={insuranceCompanyList.rowSelection}
        setRowSelection={insuranceCompanyList.setRowSelection}
      />
    </TableWrapper>
  );
}
