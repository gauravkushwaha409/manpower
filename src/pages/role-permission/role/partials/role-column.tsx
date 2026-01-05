import { ColumnDef } from "@tanstack/react-table";
import { IRoleListItem } from "../hooks/use-role-list";
import { Checkbox } from "@/components/ui/checkbox";
import { useDelete } from "@/hooks/useDelete";
import { endpoints } from "@/api/endpoints";
import { apiTags } from "@/constant/tag";
import TableAction from "@/components/TableAction";
import { useQueryParamState } from "@/hooks/useQueryParamState";
import QUERY_PARAMS from "@/constant/query-params";

export const roleData: IRoleListItem[] = [
  {
    id: "1",
    role_name: "Super Admin",
    description:
      "Full system access with permissions to manage users, roles, configurations, and reports.",
  },
  {
    id: "2",
    role_name: "Admin",
    description:
      "Manages day-to-day operations including appointments, staff, departments, and content.",
  },
  {
    id: "3",
    role_name: "Doctor",
    description:
      "Provides medical consultations, manages patient records, and reviews appointments.",
  },
  {
    id: "4",
    role_name: "Physiotherapist",
    description:
      "Handles therapy sessions, patient rehabilitation plans, and appointment follow-ups.",
  },
  {
    id: "5",
    role_name: "Nurse",
    description:
      "Assists doctors, manages patient care activities, and supports clinical operations.",
  },
  {
    id: "6",
    role_name: "Receptionist",
    description:
      "Handles patient check-ins, appointment scheduling, and front-desk coordination.",
  },
  {
    id: "7",
    role_name: "Finance Manager",
    description:
      "Manages billing, invoices, payouts, and financial reporting for the organization.",
  },
  {
    id: "8",
    role_name: "HR Manager",
    description:
      "Oversees staff onboarding, role assignments, and compliance documentation.",
  },
];

export default function RoleColumns(): ColumnDef<IRoleListItem>[] {
  const updateRole = useQueryParamState(
    QUERY_PARAMS.rolePermission.updateRole.key
  );
  const deleteRole = useDelete({
    endpoints: endpoints.role.delete,
    invalidates: [apiTags.role.list],
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
      header: "Role Name",
      accessorKey: "role_name",
      size: 400,
    },
    {
      header: "Role Description",
      accessorKey: "description",
      size: 800,
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
              updateRole.setValue(row?.original?.id);
            },
          }}
          del={{
            active: true,
            onClick: (e: React.MouseEvent<HTMLButtonElement>) => {
              e.preventDefault();
              deleteRole.handleOpenModal(row?.original?.id);
            },
          }}
        />
      ),
      size: 200,
      maxSize: 200,
    },
  ];
}
