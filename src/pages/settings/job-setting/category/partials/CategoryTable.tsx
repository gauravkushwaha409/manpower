import Table from "@/components/Table";
import TableWrapper from "@/components/TableWrapper";
import { CategoryColumns, categoryData } from "./CategoryColumn";

const CategoryTable = () => {
  const column = CategoryColumns;
  return (
    <TableWrapper isLoading={false}>
      <Table columns={column} data={categoryData} />
    </TableWrapper>
  );
};

export default CategoryTable;
