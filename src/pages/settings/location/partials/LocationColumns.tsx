import { CustomColumnDef } from "@/components/Table";
import { ILocation } from "../interface/ILocation";
import LoactionActions from "./LocationActions";

export const LocationColumns: CustomColumnDef<ILocation>[] = [
  {
    header: "Location Name",
    accessorKey: "locationName",
  },
  {
    header: "Location Image",
    accessorKey: "locationImage",
  },
  {
    header: "Action",
    accessorKey: "action",

    cell: ({ row }) => <LoactionActions row={row?.original} />,
  },
];
