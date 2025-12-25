import Table from "@/components/Table";
import TableWrapper from "@/components/TableWrapper";
import SubCategoryColumns, { subCategoryData } from "./sub-category-column";
import useSubCategoryList from "../hooks/use-sub-category-list";

const SubCategoryTable = () => {
  const subCategoryList = useSubCategoryList();
  return (
    <TableWrapper wrapperClassName="mt-4" isLoading={false}>
      <Table
        columns={SubCategoryColumns()}
        data={subCategoryData}
        rowSelection={subCategoryList.rowSelection}
        setRowSelection={subCategoryList.setRowSelection}
      />
    </TableWrapper>
  );
};

export default SubCategoryTable;
