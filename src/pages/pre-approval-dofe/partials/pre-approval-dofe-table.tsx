import Table from "@/components/Table";
import TableWrapper from "@/components/TableWrapper";
import PreApprovalDofeColumns, {
  PreApprovalDofeTableData,
} from "./pre-approval-dofe-column";
import { useState } from "react";

const PreApprovalDofeTable = () => {
  const [rowSelection, setRowSelection] = useState({});

  return (
    <TableWrapper wrapperClassName="mt-4" isLoading={false}>
      <Table
        columns={PreApprovalDofeColumns()}
        data={PreApprovalDofeTableData}
        rowSelection={rowSelection}
        setRowSelection={setRowSelection}
      />
    </TableWrapper>
  );
};

export default PreApprovalDofeTable;
