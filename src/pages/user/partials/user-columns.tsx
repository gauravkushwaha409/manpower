import { ColumnDef } from "@tanstack/react-table";
import { IUserListItem } from "../hooks/use-user-list";
import { Checkbox } from "@/components/ui/checkbox";
import TableAction from "@/components/TableAction";
import { useQueryParamState } from "@/hooks/useQueryParamState";
import QUERY_PARAMS from "@/constant/query-params";
import { useDelete } from "@/hooks/useDelete";
import { endpoints } from "@/api/endpoints";
import { apiTags } from "@/constant/tag";

export const userData: IUserListItem[] = [
  {
    id: "usr-001",
    name: "Ramesh Adhikari",
    email: "ramesh.adhikari@globalmanpower.com",
    phone_no: "+977-9801234567",
    role: "Manpower Agent",
  },
  {
    id: "usr-002",
    name: "Suman Karki",
    email: "suman.karki@overseasrecruiters.com",
    phone_no: "+977-9812345678",
    role: "Foreign Employment Consultant",
  },
  {
    id: "usr-003",
    name: "Prakash Shrestha",
    email: "prakash.shrestha@workabroadnepal.com",
    phone_no: "+977-9823456789",
    role: "Manpower Operations Manager",
  },
  {
    id: "usr-004",
    name: "Anita Gurung",
    email: "anita.gurung@globalplacement.org",
    phone_no: "+977-9841122334",
    role: "Overseas Placement Officer",
  },
  {
    id: "usr-005",
    name: "Bikash Tamang",
    email: "bikash.tamang@employmentlink.com",
    phone_no: "+977-9856677889",
    role: "Recruitment Coordinator",
  },
];

export default function UserColumns(): ColumnDef<IUserListItem>[] {
  const updateUser = useQueryParamState(QUERY_PARAMS.user.updateUser.key);
  const deleteUser = useDelete({
    endpoints: endpoints.user.delete,
    invalidates: [apiTags.user.list],
  });
  return [
    {
      id: "select",
      header: ({ table }) => {
        return (
          <div className="">
            <Checkbox
              checked={
                table.getIsAllRowsSelected()
                  ? true
                  : table.getIsSomeRowsSelected()
                  ? "indeterminate"
                  : false
              }
              onCheckedChange={(value) => {
                table.toggleAllRowsSelected(!!value);
              }}
            />
          </div>
        );
      },
      cell: ({ row }) => {
        return (
          <div className="">
            <Checkbox
              checked={
                row.getIsSelected()
                  ? true
                  : row.getIsSomeSelected()
                  ? "indeterminate"
                  : false
              }
              onCheckedChange={row.getToggleSelectedHandler()}
            />
          </div>
        );
      },
      size: 50,
    },
    {
      header: "S.N.",
      cell: ({ row }) => row.index + 1,
      size: 100,
    },
    {
      header: "Name",
      accessorKey: "name",
      size: 200,
    },
    {
      header: "Email",
      accessorKey: "email",
      size: 200,
    },
    {
      header: "Phone",
      accessorKey: "phone_no",
      size: 200,
    },
    {
      header: "Role",
      accessorKey: "role",
      size: 200,
    },
    {
      header: "Action",
      accessorKey: "action",
      cell: ({ row }) => (
        <TableAction
          edit={{
            active: true,
            onClick: (e: React.MouseEvent<HTMLButtonElement>) => {
              e.preventDefault();
              updateUser.setValue(row?.original?.id);
            },
          }}
          del={{
            active: true,
            onClick: (e: React.MouseEvent<HTMLButtonElement>) => {
              e.preventDefault();
              deleteUser.handleOpenModal(row?.original?.id);
            },
          }}
        />
      ),
      size: 200,
      maxSize: 200,
    },
  ];
}
