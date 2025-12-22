import Table from "@/components/Table";
import TableWrapper from "@/components/TableWrapper";
import { SubCategoryColumns, subCategoryData } from "./SubCategoryColumn";

const SubCategoryTable = () => {
  const column = SubCategoryColumns;
  return (
    <TableWrapper isLoading={false}>
      <Table columns={column} data={subCategoryData} />
    </TableWrapper>
  );
};

export default SubCategoryTable;
