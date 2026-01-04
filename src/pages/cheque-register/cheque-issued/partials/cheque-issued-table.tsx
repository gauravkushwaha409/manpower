import Table from "@/components/Table";
import TableWrapper from "@/components/TableWrapper";
import ChequeIssuedColumn, { chequeIssuedData } from "./cheque-issued-column";
import { useState } from "react";

const ChequeIssuedTable = () => {
  const [rowSelection, setRowSelection] = useState({});
  return (
    <TableWrapper isLoading={false} isDataAvailable={true}>
      <Table
        data={chequeIssuedData}
        columns={ChequeIssuedColumn()}
        getRowId={(row) => row?.id}
        rowSelection={rowSelection}
        setRowSelection={setRowSelection}
      />
    </TableWrapper>
  );
};

export default ChequeIssuedTable;
