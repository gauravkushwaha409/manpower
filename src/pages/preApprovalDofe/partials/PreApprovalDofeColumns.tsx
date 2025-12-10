// import { CustomColumnDef } from "@/components/Table";
import { CustomColumnDef } from "@/components/Table";
import PreApprovalDofeActionButtons from "./PreApprovalDofeActions";
// import { List } from "lucide-react";
import { IPreApprovalDofeListItem } from "../interface/IPreApprovalDofe";
// import { IPreApprovalDofeListItem } from "../interface/IPreApprovalDofe";

export const PreApprovalDofeColumns: CustomColumnDef<IPreApprovalDofeListItem>[] = [
  {
    header: "SN",
    accessorKey: "sn",
    search: false,
    cell: ({ row }) => row.index + 1,
  },
  {
    header: "Country",
    accessorKey: "company.companyAddress.country",
  },
  {
    header: "Company",
    accessorKey: "company.recruitment_company",
  },
  {
    header: "Pre Approval Date",
    accessorKey: "preApprovalDate",
  },
  {
    header: "LT Number",
    accessorKey: "ltNumber",
  },
  {
    header: "Chalani Number",
    accessorKey: "chalanNumber",
  },
  {
    header: "Action",
    accessorKey: "action",

    cell: ({ row }) => <PreApprovalDofeActionButtons row={row?.original} />,
  },
];
