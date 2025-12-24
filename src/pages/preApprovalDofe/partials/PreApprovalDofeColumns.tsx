import TableAction from "@/components/TableAction";
import { IPreApprovalDofeListItem } from "../interface/IPreApprovalDofe";
import { ColumnDef } from "@tanstack/react-table";
import { Checkbox } from "@/components/ui/checkbox";

export const PreApprovalDofeColumns: ColumnDef<IPreApprovalDofeListItem>[] = [
  {
    id: "select",
    header: ({ table }) => {
      return (
        <div className="">
          <Checkbox
            checked={
              table.getIsAllRowsSelected()
                ? true
                : table.getIsSomeRowsSelected()
                ? "indeterminate"
                : false
            }
            onCheckedChange={(value) => {
              table.toggleAllRowsSelected(!!value);
            }}
          />
        </div>
      );
    },
    cell: ({ row }) => {
      return (
        <div className="">
          <Checkbox
            checked={
              row.getIsSelected()
                ? true
                : row.getIsSomeSelected()
                ? "indeterminate"
                : false
            }
            onCheckedChange={row.getToggleSelectedHandler()}
          />
        </div>
      );
    },
    size: 50,
  },
  {
    header: "SN",
    accessorKey: "sn",
    cell: ({ row }) => row.index + 1,
    size: 50,
  },
  {
    header: "Country",
    accessorKey: "company.companyAddress.country",
    size: 200,
  },
  {
    header: "Company",
    accessorKey: "company.recruitment_company",
    size: 400,
  },
  {
    header: "Pre Approval Date",
    accessorKey: "preApprovalDate",
    size: 200,
  },
  {
    header: "LT Number",
    accessorKey: "ltNumber",
    size: 200,
  },
  {
    header: "Chalani Number",
    accessorKey: "chalanNumber",
    size: 200,
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
    size: 200,
  },
];
