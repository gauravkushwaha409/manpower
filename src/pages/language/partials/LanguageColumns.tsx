import { CustomColumnDef } from "@/components/Table";
import { ILanguage } from "../interface/ILanguage";
import LanguageActionButtons from "./LanguageAction";

export const LanguageColumns: CustomColumnDef<ILanguage>[] = [
  {
    header: "SN",
    accessorKey: "sn",
    search: false,
    cell: ({ row }) => row.index + 1,
  },
  {
    header: "Language",
    accessorKey: "language",
  },
  {
    header: "Action",
    accessorKey: "action",
    search: false,
    cell: ({ row }) => <LanguageActionButtons row={row.original} />,
  },
];
