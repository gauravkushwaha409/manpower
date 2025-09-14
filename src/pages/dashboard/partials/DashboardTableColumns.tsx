import { CustomColumnDef } from "@/components/Table";
import DashboardTableActions from "./DashboardTableActions";

interface DashboardTableRow {
  activity: string;
  candidate: string;
  country: string;
}
export const DashboardTableColumns: CustomColumnDef<DashboardTableRow>[] = [
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
