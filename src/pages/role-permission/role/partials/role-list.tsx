import TableWrapper from "@/components/TableWrapper";
import useRoleList from "../hooks/use-role-list";
import Table from "@/components/Table";
import RoleColumns, { roleData } from "./role-column";

export default function RoleTable() {
  const roleList = useRoleList();
  return (
    <TableWrapper isLoading={false}>
      <Table
        columns={RoleColumns()}
        data={roleData}
        rowSelection={roleList.rowSelection}
        setRowSelection={roleList.setRowSelection}
      />
    </TableWrapper>
  );
}
