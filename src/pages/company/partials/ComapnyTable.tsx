import Table from "@/components/Table";
import { CompanyColumns } from "./CompanyColumns";
import { companyTableData } from "@/data/company";
import TableWrapper from "@/components/TableWrapper";

const ComapnyTable = () => {
  return (
    <TableWrapper isLoading={false}>
      <Table columns={CompanyColumns} data={companyTableData} />
    </TableWrapper>
  );
};

export default ComapnyTable;
