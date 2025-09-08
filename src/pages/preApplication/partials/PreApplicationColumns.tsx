import { CustomColumnDef } from "@/components/Table";
import PreApplicationActions from "./PreApplicationActions";
import { IPreApplication } from "../interface/IPreApplication";

export const PreApplicationColumns: CustomColumnDef<IPreApplication>[] = [
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
