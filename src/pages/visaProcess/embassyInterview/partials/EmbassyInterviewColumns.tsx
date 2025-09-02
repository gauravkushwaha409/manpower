import { CustomColumnDef } from "@/components/Table";
import { IEmbassyInterview } from "../interface/IEmbassyInterview";
import EmbassyInterviewActions from "./EmbassyInterviewActions";

export const EmbassyInterviewColumns: CustomColumnDef<IEmbassyInterview>[] = [
  {
    header: "Candidate Name",
    accessorKey: "candidate_name",
  },
  {
    header: "Interview Date",
    accessorKey: "interview_date",
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
    cell: ({ row }) => <EmbassyInterviewActions row={row?.original} />,
  },
];
