import Table from "@/components/Table";
import TableWrapper from "@/components/TableWrapper";
import PreApprovalDofeColumns from "./PreApprovalDofeColumns";
import { PreApprovalDofeTableData } from "../hooks/useGetPreApprovalDofe";
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
