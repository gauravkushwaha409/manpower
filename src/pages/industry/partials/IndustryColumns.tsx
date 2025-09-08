import { CustomColumnDef } from "@/components/Table";
import { IIndustry } from "../interface/IIndustry";
import CountryActions from "./IndustryActions";

export const IndustryColumns: CustomColumnDef<IIndustry>[] = [
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
