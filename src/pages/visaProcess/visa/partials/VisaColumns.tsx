import { CustomColumnDef } from "@/components/Table";
import VisaActions from "./VisaActions";
import { IVisa } from "../interface/IVisa";

export const VisaColumns: CustomColumnDef<IVisa>[] = [
  {
    header: "Company Name",
    accessorKey: "company_name",
  },
  {
    header: "Candidate Name",
    accessorKey: "candidate_name",
  },
  {
    header: "Job Vacancy",
    accessorKey: "job_vacancy",
  },
  {
    header: "Visa Number",
    accessorKey: "visa_number",
  },
  {
    header: "Status",
    accessorKey: "status",
  },
  {
    header: "Action",
    accessorKey: "action",
    cell: ({ row }) => <VisaActions row={row?.original} />,
  },
];
