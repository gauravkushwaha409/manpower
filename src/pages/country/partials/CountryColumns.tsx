import { CustomColumnDef } from "@/components/Table";
import { ICountry } from "../interface/ICountry";
import CountryActions from "./CountryActions";

export const CountryColumns: CustomColumnDef<ICountry>[] = [
  {
    header: "SN",
    accessorKey: "sn",
    search: false,
    cell: ({ row }) => row.index + 1,
  },
  {
    header: "Country",
    accessorKey: "country",
  },
  {
    header: "Flag",
    accessorKey: "flag",

    cell: (cell) => (
      <div className="flex items-center">
        <img
          src={
            typeof cell.row.original.flag === "string"
              ? cell.row.original.flag
              : ""
          }
          alt=""
          className="w-8 mx-auto"
        />
      </div>
    ),
  },
  {
    header: "Currency",
    accessorKey: "currency",
  },
  {
    header: "Capital",
    accessorKey: "capital",
  },
  {
    header: "Language",
    accessorKey: "language",
  },
  {
    header: "Action",
    accessorKey: "action",

    cell: ({ row }) => <CountryActions row={row?.original} />,
  },
];
