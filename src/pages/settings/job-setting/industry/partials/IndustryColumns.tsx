import { CustomColumnDef } from "@/components/Table";
import { IIndustry } from "../interface/IIndustry";
import CountryActions from "./IndustryActions";

export const IndustryColumns: CustomColumnDef<IIndustry>[] = [
   {
    header: "SN",
    accessorKey: "sn",
    search: false,
    cell: ({ row }) => row.index + 1,
  },
  {
    header: "Industry",
    accessorKey: "industry",
  },
  {
    header: "Action",
    accessorKey: "action",

    cell: ({ row }) => <CountryActions row={row?.original} />,
  },
];
