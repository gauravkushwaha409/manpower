import { Checkbox } from "@/components/ui/checkbox";
import { ColumnDef } from "@tanstack/react-table";
import { IChequeRegisterListItem } from "../hooks/use-cheque-register-list";

export const chequeRegisterData: IChequeRegisterListItem[] = [
  {
    id: "1",
    date: "2026-01-06",
    cheque_no: "CHK1001",
    account: "1234567890",
    bank: "Bank of Nepal",
    amount: "2500.00",
  },
  {
    id: "2",
    date: "2026-01-05",
    cheque_no: "CHK1002",
    account: "2345678901",
    bank: "Nepal Investment Bank",
    amount: "5000.50",
  },
  {
    id: "3",
    date: "2026-01-04",
    cheque_no: "CHK1003",
    account: "3456789012",
    bank: "Himalayan Bank",
    amount: "12500.75",
  },
  {
    id: "4",
    date: "2026-01-03",
    cheque_no: "CHK1004",
    account: "4567890123",
    bank: "Nabil Bank",
    amount: "3000.00",
  },
  {
    id: "5",
    date: "2026-01-02",
    cheque_no: "CHK1005",
    account: "5678901234",
    bank: "Standard Chartered",
    amount: "7800.25",
  },
];

export default function ChequeRegisterColumn(): ColumnDef<IChequeRegisterListItem>[] {
  return [
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
      header: "Date",
      accessorKey: "date",
      size: 200,
    },
    {
      header: "Cheque No.",
      accessorKey: "cheque_no",
      size: 400,
    },
    {
      header: "Account",
      accessorKey: "account",
      size: 400,
    },
    {
      header: "Bank",
      accessorKey: "bank",
      size: 400,
    },
    {
      header: "Amount",
      accessorKey: "amount",
      size: 400,
    },
  ];
}
