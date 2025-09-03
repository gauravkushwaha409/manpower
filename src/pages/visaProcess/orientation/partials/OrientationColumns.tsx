import { CustomColumnDef } from "@/components/Table";
import { IOrientation } from "../interface/IOrientation";
import OrientationActions from "./OrientationActions";

export const OrientationColumns: CustomColumnDef<IOrientation>[] = [
  {
    header: "Candidate Name",
    accessorKey: "candidate_name",
  },
  {
    header: "Orientation Center Name",
    accessorKey: "orientation_center_name",
  },
  {
    header: "Start Date",
    accessorKey: "start_date",
  },
  {
    header: "End Date",
    accessorKey: "end_date",
  },
  {
    header: "Certificate No.",
    accessorKey: "certificate_no",
  },
  {
    header: "Action",
    accessorKey: "action",
    cell: ({ row }) => <OrientationActions row={row?.original} />,
  },
];
