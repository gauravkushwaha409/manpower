import { CustomColumnDef } from "@/components/Table";
import { ICountry } from "../interface/ICountry";
import TableActions from "@/components/TableActions";

export const getCountryColumns = (
  onEdit: (country: ICountry) => void,
  onDelete: (country: ICountry) => void
): CustomColumnDef<ICountry>[] => [
  {
    header: "Country",
    accessorKey: "country",
    search: false,
  },
  {
    header: "Flag",
    accessorKey: "flag",
    search: false,
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
    search: false,
  },
  {
    header: "Capital",
    accessorKey: "capital",
    search: false,
  },
  {
    header: "Language",
    accessorKey: "language",
    search: false,
  },
  {
    header: "Action",
    accessorKey: "action",
    search: false,
    cell: ({ row }) => (
      <TableActions row={row.original} onEdit={onEdit} onDelete={onDelete} />
    ),
  },
];
