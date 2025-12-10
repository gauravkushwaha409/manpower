import { CustomColumnDef } from "@/components/Table";
import PreApplicationActions from "./PreApplicationActions";
import { IPreApplication } from "../interface/IPreApplication";

export const PreApplicationColumns: CustomColumnDef<IPreApplication>[] = [
   {
    header: "SN",
    accessorKey: "sn",
    search: false,
    cell: ({ row }) => row.index + 1,
  },
  {
    header: "Title",
    accessorKey: "title",
  },
  {
    header: "Description",
    accessorKey: "description",
  },
  {
    header: "Action",
    accessorKey: "action",

    cell: ({ row }) => <PreApplicationActions row={row?.original} />,
  },
];
