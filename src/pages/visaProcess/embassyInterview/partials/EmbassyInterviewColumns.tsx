import { CustomColumnDef } from "@/components/Table";
import { IEmbassyInterview } from "../interface/IEmbassyInterview";
import TableActions from "@/components/TableActions";

export const getEmbassyInterviewColumns = (
  onEdit: (embassyInterview: IEmbassyInterview) => void,
  onDelete: (embassyInterview: IEmbassyInterview) => void
): CustomColumnDef<IEmbassyInterview>[] => [
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
    cell: ({ row }) => (
      <TableActions row={row.original} onEdit={onEdit} onDelete={onDelete} />
    ),
  },
];
