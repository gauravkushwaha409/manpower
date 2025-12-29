import Table from "@/components/Table";
import TableWrapper from "@/components/TableWrapper";
import { CandidateColumns, candidateData } from "./candidate-column";
import { useState } from "react";

const CandidateTable = () => {
  const [rowSelection, setRowSelection] = useState({});
  console.log("row selection---->", rowSelection);
  return (
    <TableWrapper wrapperClassName="mt-4" isLoading={false}>
      <Table
        columns={CandidateColumns()}
        data={candidateData}
        rowSelection={rowSelection}
        setRowSelection={setRowSelection}
      />
    </TableWrapper>
  );
};
export default CandidateTable;
