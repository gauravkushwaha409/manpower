import Table from "@/components/Table";
import TableWrapper from "@/components/TableWrapper";
import useChequeReceivedList from "../hooks/use-cheque-received-list";
import ChequeReceivedColumn, {
  chequeReceivedData,
} from "./cheque-received-column";

const ChequeReceivedTable = () => {
  const chequeReceived = useChequeReceivedList();

  return (
    <TableWrapper isLoading={false}>
      <Table
        columns={ChequeReceivedColumn()}
        data={chequeReceivedData}
        getRowId={(row) => row?.id}
        rowSelection={chequeReceived?.rowSelection}
        setRowSelection={chequeReceived?.setRowSelection}
      />
    </TableWrapper>
  );
};

export default ChequeReceivedTable;
