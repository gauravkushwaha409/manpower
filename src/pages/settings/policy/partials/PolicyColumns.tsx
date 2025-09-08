import { CustomColumnDef } from "@/components/Table";
import { IPolicy } from "../interface/IPolicy";
import PolicyActions from "./PolicyActions";

export const PolicyColumns: CustomColumnDef<IPolicy>[] = [
  {
    header: "Policy Title",
    accessorKey: "policyType",
  },
  {
    header: "Policy Type",
    accessorKey: "policyType",
  },
  {
    header: "Policy Description",
    accessorKey: "policyDescription",
  },
  {
    header: "Action",
    accessorKey: "action",

    cell: ({ row }) => <PolicyActions row={row?.original} />,
  },
];
