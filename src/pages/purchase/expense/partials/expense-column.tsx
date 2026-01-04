import { ColumnDef } from "@tanstack/react-table";
import { IExpenseListItem } from "../hooks/use-expense-list";
import { Checkbox } from "@/components/ui/checkbox";
import TableAction from "@/components/TableAction";
import { useNavigate } from "react-router-dom";
import { useCallback } from "react";
import { PATH } from "@/constant/path";
import { useDelete } from "@/hooks/useDelete";
import { endpoints } from "@/api/endpoints";
import { apiTags } from "@/constant/tag";

export const expenseListData: IExpenseListItem[] = [
  {
    id: "1",
    supplier: "ABC Traders",
    bill_no: "BILL-001",
    reference_no: "REF-2024-001",
    date: "2024-12-01",
    total: "1250.50",
  },
  {
    id: "2",
    supplier: "Global Supplies Ltd",
    bill_no: "BILL-002",
    reference_no: "REF-2024-002",
    date: "2024-12-03",
    total: "3420.00",
  },
  {
    id: "3",
    supplier: "Everest Stationery",
    bill_no: "BILL-003",
    reference_no: "REF-2024-003",
    date: "2024-12-05",
    total: "875.75",
  },
  {
    id: "4",
    supplier: "Himalayan Hardware",
    bill_no: "BILL-004",
    reference_no: "REF-2024-004",
    date: "2024-12-08",
    total: "4899.99",
  },
  {
    id: "5",
    supplier: "Prime Office Solutions",
    bill_no: "BILL-005",
    reference_no: "REF-2024-005",
    date: "2024-12-10",
    total: "2150.00",
  },
];

const ExpenseColumn = (): ColumnDef<IExpenseListItem>[] => {
  const navigate = useNavigate();
  const handleClickEdit = useCallback((id: string) => {
    navigate(PATH.accounting.purchase.expense.update.replace(":id", id));
  }, []);
  const { handleOpenModal: handleOpenDeleteModal } = useDelete({
    endpoints: endpoints.expense.delete,
    invalidates: [apiTags.expense.list],
  });

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
      header: "Supplier",
      accessorKey: "supplier",
      size: 400,
    },
    {
      header: "Bill No.",
      accessorKey: "bill_no",
      size: 400,
    },
    {
      header: "Reference No.",
      accessorKey: "reference_no",
    },
    {
      header: "Date",
      accessorKey: "date",
    },
    {
      header: "Total",
      accessorKey: "total",
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

export default ExpenseColumn;
