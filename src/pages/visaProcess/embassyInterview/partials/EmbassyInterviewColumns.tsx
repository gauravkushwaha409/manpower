import { CustomColumnDef } from "@/components/Table";
import { IEmbassyInterview } from "../interface/IEmbassyInterview";
import EmbassyInterviewActions from "./EmbassyInterviewActions";

export const EmbassyInterviewColumns: CustomColumnDef<IEmbassyInterview>[] = [
  {
    header: "Candidate Name",
    accessorKey: "candidate_name",
    search: true,
  },
  {
    header: "Interview Date",
    accessorKey: "interview_date",
    search: true,
  },
  {
    header: "Visa Number",
    accessorKey: "visa_number",
    search: true,
  },
  {
    header: "Status",
    accessorKey: "status",
    search: false,
  },
  {
    header: "Action",
    accessorKey: "action",
    search: false,
    cell: ({ row }) => <EmbassyInterviewActions row={row?.original} />,
  },
];
