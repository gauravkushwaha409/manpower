import TableWrapper from "@/components/TableWrapper";
import Table from "@/components/Table";
import useOrientationList from "../hooks/use-orientation-list";
import OrientationColumns, { orientationData } from "./orientation-column";

const OrientationTable = () => {
  const orientationList = useOrientationList();
  return (
    <TableWrapper wrapperClassName="mt-4" isLoading={false}>
      <Table
        columns={OrientationColumns()}
        data={orientationData}
        rowSelection={orientationList.rowSelection}
        setRowSelection={orientationList.setRowSelection}
      />
    </TableWrapper>
  );
};

export default OrientationTable;
