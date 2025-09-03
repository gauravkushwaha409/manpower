import { CustomColumnDef } from "@/components/Table";
import { IMedicalReport } from "../interface/IMedicalReport";
import MedicalReportActions from "./MedicalReportActions";

export const MedicalReportColumns: CustomColumnDef<IMedicalReport>[] = [
  {
    header: "Name",
    accessorKey: "name",
  },
  {
    header: "Institution / Hospital Name",
    accessorKey: "hospital_name",
  },
  {
    header: "Date",
    accessorKey: "report_date",
  },
  {
    header: "Status",
    accessorKey: "status",
  },
  {
    header: "Action",
    accessorKey: "action",
    cell: ({ row }) => <MedicalReportActions row={row?.original} />,
  },
];
