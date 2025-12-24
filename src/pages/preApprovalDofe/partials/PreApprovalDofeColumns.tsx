import TableAction from "@/components/TableAction";
import { IPreApprovalDofeListItem } from "../interface/IPreApprovalDofe";
import { ColumnDef } from "@tanstack/react-table";

export const PreApprovalDofeColumns: ColumnDef<IPreApprovalDofeListItem>[] = [
  {
    header: "SN",
    accessorKey: "sn",
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

    cell: () => (
      <TableAction
        del={{ active: true }}
        edit={{ active: true }}
        view={{ active: true }}
      />
    ),
  },
];
