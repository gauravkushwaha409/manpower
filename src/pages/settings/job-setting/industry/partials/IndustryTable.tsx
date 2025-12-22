import TableWrapper from "@/components/TableWrapper";
import { IndustryColumns } from "./IndustryColumns";
import Table from "@/components/Table";

const IndustryTable = () => {
  const column = IndustryColumns;

  return (
    <TableWrapper isLoading={false}>
      <Table columns={column} data={column} />
    </TableWrapper>
  );
};

export default IndustryTable;
