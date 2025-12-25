import Table from "@/components/Table";
import TableWrapper from "@/components/TableWrapper";
import CategoryColumns, { categoryData } from "./category-column";
import useCategoryList from "../hooks/use-category-list";

const CategoryTable = () => {
  const categoryList = useCategoryList();
  return (
    <TableWrapper isLoading={categoryList.isLoading}>
      <Table
        columns={CategoryColumns()}
        data={categoryData}
        rowSelection={categoryList?.rowSelection}
        setRowSelection={categoryList?.setRowSelection}
      />
    </TableWrapper>
  );
};

export default CategoryTable;
