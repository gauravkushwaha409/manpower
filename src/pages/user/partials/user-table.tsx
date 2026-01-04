import Table from "@/components/Table";
import TableWrapper from "@/components/TableWrapper";
import UserColumns, { userData } from "./user-columns";
import useUserList from "../hooks/use-user-list";

export default function UserTable() {
  const userList = useUserList();
  return (
    <TableWrapper
      wrapperClassName="mt-4"
      isLoading={false}
      isDataAvailable={true}
    >
      <Table
        columns={UserColumns()}
        data={userData}
        getRowId={(row) => row?.id}
        rowSelection={userList.rowSelection}
        setRowSelection={userList.setRowSelection}
      />
    </TableWrapper>
  );
}
