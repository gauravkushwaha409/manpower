import Table from "@/components/Table";
import TableWrapper from "@/components/TableWrapper";
import { CandidateColumns } from "./candidate-column";
import { useState } from "react";
import { CandidateTableData } from "../hooks/useGetCandidate";

const CandidateTable = () => {
  const [rowSelection, setRowSelection] = useState({});
  return (
    <TableWrapper wrapperClassName="mt-4" isLoading={false}>
      <Table
        columns={CandidateColumns()}
        data={CandidateTableData}
        rowSelection={rowSelection}
        setRowSelection={setRowSelection}
      />
    </TableWrapper>
  );
};
export default CandidateTable;
