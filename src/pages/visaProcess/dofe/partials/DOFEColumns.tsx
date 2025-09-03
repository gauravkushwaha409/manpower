import { CustomColumnDef } from "@/components/Table";
import { IDofe } from "../interface/IDofe";
import DOFEActions from "./DOFEActions";

export const DOFEColumns: CustomColumnDef<IDofe>[] = [
  {
    header: "Candidate Name",
    accessorKey: "candidate_name",
  },
  {
    header: "Company",
    accessorKey: "company",
  },
  {
    header: "Sticker No.",
    accessorKey: "sticker_no",
  },
  {
    header: "Country",
    accessorKey: "country",
  },
  {
    header: "Job Vacancy",
    accessorKey: "job_vacancy",
  },
  {
    header: "Action",
    accessorKey: "action",
    cell: ({ row }) => <DOFEActions row={row?.original} />,
  },
];
