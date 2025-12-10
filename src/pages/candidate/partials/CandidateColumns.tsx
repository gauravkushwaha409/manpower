import { CustomColumnDef } from "@/components/Table";
import CandidateActions from "./CandidateActions";
import { CandidateTable } from "../interface/ICandidate";

export const CandidateColumns: CustomColumnDef<CandidateTable>[] = [
   {
    header: "SN",
    accessorKey: "sn",
    search: false,
    cell: ({ row }) => row.index + 1,
  },
  {
    header: "Candidate Name",
    accessorKey: "firstname",
  },
  {
    header: "Agent Name",
    accessorKey: "agentName",
  },
  {
    header: "Phone Number",
    accessorKey: "phone",
  },
  {
    header: "Address",
    accessorKey: "district",
  },
  {
    header: "Passport Number",
    accessorKey: "passport_number",
  },
  {
    header: "Action",
    accessorKey: "action",

    cell: ({ row }) => <CandidateActions row={row?.original} />,
  },
];
