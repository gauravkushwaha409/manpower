import TableWrapper from "@/components/TableWrapper";
import Table from "@/components/Table";
import useShramList from "../hooks/use-shram-list";
import ShramColumns, { shramData } from "./shram-column";

const ShramTable = () => {
  const shramList = useShramList();
  return (
    <TableWrapper wrapperClassName="mt-4" isLoading={false}>
      <Table
        columns={ShramColumns()}
        data={shramData}
        rowSelection={shramList.rowSelection}
        setRowSelection={shramList.setRowSelection}
      />
    </TableWrapper>
  );
};

export default ShramTable;
