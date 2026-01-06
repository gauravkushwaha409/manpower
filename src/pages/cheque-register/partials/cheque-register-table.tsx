import Table from "@/components/Table";
import TableWrapper from "@/components/TableWrapper";
import ChequeRegisterColumn, {
  chequeRegisterData,
} from "./cheque-register-column";
import useChequeRegisterList from "../hooks/use-cheque-register-list";

export default function ChequeRegisterTable() {
  const chequeRegisterList = useChequeRegisterList();
  return (
    <TableWrapper
      isLoading={false}
      isDataAvailable={true}
      wrapperClassName="mt-4"
    >
      <Table
        columns={ChequeRegisterColumn()}
        data={chequeRegisterData}
        getRowId={(row) => row?.id}
        rowSelection={chequeRegisterList.rowSelection}
        setRowSelection={chequeRegisterList.setRowSelection}
      />
    </TableWrapper>
  );
}
