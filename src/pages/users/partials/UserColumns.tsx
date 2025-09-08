import { CustomColumnDef } from "@/components/Table";
import { IUser } from "../interface/IUser";
import UserActions from "./UserActions";

export const UserColumns: CustomColumnDef<IUser>[] = [
  {
    header: "Name",
    accessorKey: "name",
  },
  {
    header: "Email",
    accessorKey: "email",
  },
  {
    header: "Phone Number",
    accessorKey: "phone_No",
  },
  {
    header: "Action",
    accessorKey: "action",

    cell: ({ row }) => <UserActions row={row?.original} />,
  },
];
