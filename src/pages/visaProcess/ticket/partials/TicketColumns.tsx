import { CustomColumnDef } from "@/components/Table";
import TicketActions from "./TicketActions";
import { ITicket } from "../interface/ITicket";

export const TicketColumns: CustomColumnDef<ITicket>[] = [
  {
    header: "Candidate Name",
    accessorKey: "candidate_name",
  },
  {
    header: "Country",
    accessorKey: "country",
  },
  {
    header: "Flight Number",
    accessorKey: "flight_number",
  },
  {
    header: "Airline Name",
    accessorKey: "airline_name",
  },

  {
    header: "Action",
    accessorKey: "action",
    cell: ({ row }) => <TicketActions row={row?.original} />,
  },
];
