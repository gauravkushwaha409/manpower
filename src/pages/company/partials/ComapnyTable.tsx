import Table from "@/components/Table";
import CompanyColumns from "./CompanyColumns";
import { companyTableData } from "@/data/company";
import TableWrapper from "@/components/TableWrapper";
import { useState } from "react";

const ComapnyTable = () => {
  const [rowSelection, setRowSelection] = useState({});

  return (
    <TableWrapper wrapperClassName="mt-4" isLoading={false}>
      <Table
        columns={CompanyColumns()}
        data={companyTableData}
        rowSelection={rowSelection}
        setRowSelection={setRowSelection}
      />
    </TableWrapper>
  );
};

export default ComapnyTable;
