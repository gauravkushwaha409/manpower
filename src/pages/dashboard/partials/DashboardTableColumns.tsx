import { ColumnDef } from "@tanstack/react-table";
import DashboardTableActions from "./DashboardTableActions";

interface DashboardTableRow {
  activity: string;
  candidate: string;
  country: string;
}
export const DashboardTableColumns: ColumnDef<DashboardTableRow>[] = [
  {
    header: "Activity",
    accessorKey: "activity",
  },
  {
    header: "Candidate",
    accessorKey: "candidate",
  },
  {
    header: "Country",
    accessorKey: "country",
  },
  {
    header: "Action",
    accessorKey: "action",

    cell: ({ row }) => <DashboardTableActions row={row?.original} />,
  },
];
