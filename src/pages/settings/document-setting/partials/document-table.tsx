import Table from "@/components/Table";
import TableWrapper from "@/components/TableWrapper";
import DocumentColumns, { documentList } from "./document-column";
import useDocumentList from "../hooks/use-document-list";

const DocumentTable = () => {
  const document = useDocumentList();
  return (
    <TableWrapper wrapperClassName="mt-4" isLoading={false}>
      <Table
        columns={DocumentColumns()}
        data={documentList}
        rowSelection={document.rowSelection}
        setRowSelection={document.setRowSelection}
      />
    </TableWrapper>
  );
};

export default DocumentTable;
