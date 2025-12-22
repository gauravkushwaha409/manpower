import Table from "@/components/Table";
import TableWrapper from "@/components/TableWrapper";
import { PreApprovalDofeColumns } from "./PreApprovalDofeColumns";
import { PreApprovalDofeTableData } from "../hooks/useGetPreApprovalDofe";

const PreApprovalDofeTable = () => {
  return (
    <TableWrapper isLoading={false}>
      <Table columns={PreApprovalDofeColumns} data={PreApprovalDofeTableData} />
    </TableWrapper>
  );
};

export default PreApprovalDofeTable;
