import { ColumnDef } from "@tanstack/react-table";
import { IQuickPaymentListItem } from "../hooks/use-quick-payment-list";
import { Checkbox } from "@/components/ui/checkbox";
import TableAction from "@/components/TableAction";
import { useNavigate } from "react-router-dom";
import { useCallback } from "react";
import { PATH } from "@/constant/path";
import { useDelete } from "@/hooks/useDelete";

export const quickPaymentData: IQuickPaymentListItem[] = [
  {
    id: "1",
    paid_to: "ABC Suppliers",
    paid_from: "Main Cash Account",
    entry_no: "QP-001",
    reference: "REF-QP-2024-001",
    date: "2024-12-02",
    amount: "1500.00",
  },
  {
    id: "2",
    paid_to: "Global Logistics",
    paid_from: "Bank Account - NMB",
    entry_no: "QP-002",
    reference: "REF-QP-2024-002",
    date: "2024-12-04",
    amount: "2750.50",
  },
  {
    id: "3",
    paid_to: "Office Mart",
    paid_from: "Petty Cash",
    entry_no: "QP-003",
    reference: "REF-QP-2024-003",
    date: "2024-12-06",
    amount: "980.75",
  },
  {
    id: "4",
    paid_to: "IT Solutions Nepal",
    paid_from: "Bank Account - NIC Asia",
    entry_no: "QP-004",
    reference: "REF-QP-2024-004",
    date: "2024-12-09",
    amount: "4200.00",
  },
  {
    id: "5",
    paid_to: "Maintenance Services",
    paid_from: "Main Cash Account",
    entry_no: "QP-005",
    reference: "REF-QP-2024-005",
    date: "2024-12-11",
    amount: "1350.25",
  },
];

// ======================= Qucik Payment Columns ===============================
const QuickPaymentColumns = (): ColumnDef<IQuickPaymentListItem>[] => {
  const navigate = useNavigate();
  const { handleOpenModal: handleOpenDeleteModal } = useDelete({});

  const handleClickEdit = useCallback((id: string) => {
    navigate(PATH.quickPayment.update.replace(":id", id));
  }, []);
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
      header: "S.N.",
      cell: ({ row }) => row.index + 1,
      size: 100,
    },
    {
      header: "Paid To",
      accessorKey: "paid_to",
      size: 400,
    },
    {
      header: "Entry No.",
      accessorKey: "entry_no",
      size: 400,
    },
    {
      header: "Reference",
      accessorKey: "reference",
      size: 400,
    },
    {
      header: "Date",
      accessorKey: "date",
      size: 200,
    },
    {
      header: "Amount",
      accessorKey: "amount",
      size: 200,
    },
    {
      header: "Paid From",
      accessorKey: "paid_from",
      size: 400,
    },
    {
      header: "Action",
      accessorKey: "action",
      cell: ({ row }) => (
        <TableAction
          edit={{
            active: true,
            onClick: (e: React.MouseEvent<HTMLButtonElement>) => {
              e.preventDefault();
              handleClickEdit(row?.original?.id);
            },
          }}
          del={{
            active: true,
            onClick: (e: React.MouseEvent<HTMLButtonElement>) => {
              e.preventDefault();
              handleOpenDeleteModal(row?.original?.id);
            },
          }}
        />
      ),
      size: 200,
      maxSize: 200,
    },
  ];
};

export default QuickPaymentColumns;
