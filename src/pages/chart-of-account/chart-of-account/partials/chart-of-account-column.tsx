import { ColumnDef } from "@tanstack/react-table";
import { IChartOfAccountListItem } from "../hooks/use-chart-of-account-list";
import { Checkbox } from "@/components/ui/checkbox";
import TableAction from "@/components/TableAction";
import { useDelete } from "@/hooks/useDelete";
import { useUpdateModal } from "@/hooks/use-update-modal";

const ChartOfAccountColumn = (): ColumnDef<IChartOfAccountListItem>[] => {
  const { handleOpenModal: handleOpenDeleteModal } = useDelete({ endpoints: "", invalidates: [""] });
  const { handleOpenModal: handleOpenUpdateModal } = useUpdateModal();
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
      header: "Account Code",
      accessorKey: "account_code",
      size: 200,
    },
    {
      header: "Account Name",
      accessorKey: "account_name",
      size: 400,
    },
    {
      header: "Account Type",
      accessorKey: "account_type",
      size: 200,
    },
    {
      header: "Parent Group",
      accessorKey: "parent_group",
      size: 200,
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
              handleOpenUpdateModal(row?.original?.id);
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

export default ChartOfAccountColumn;

export const chartOfAccountData: IChartOfAccountListItem[] = [
  {
    id: "1",
    account_code: "1000",
    account_name: "Cash",
    account_type: "Asset",
    parent_group: "Current Assets",
  },
  {
    id: "2",
    account_code: "1010",
    account_name: "Bank Account",
    account_type: "Asset",
    parent_group: "Current Assets",
  },
  {
    id: "3",
    account_code: "1200",
    account_name: "Accounts Receivable",
    account_type: "Asset",
    parent_group: "Current Assets",
  },
  {
    id: "4",
    account_code: "2000",
    account_name: "Accounts Payable",
    account_type: "Liability",
    parent_group: "Current Liabilities",
  },
  {
    id: "5",
    account_code: "2100",
    account_name: "Accrued Expenses",
    account_type: "Liability",
    parent_group: "Current Liabilities",
  },
  {
    id: "6",
    account_code: "3000",
    account_name: "Owner’s Capital",
    account_type: "Equity",
    parent_group: "Equity",
  },
  {
    id: "7",
    account_code: "4000",
    account_name: "Service Revenue",
    account_type: "Income",
    parent_group: "Revenue",
  },
  {
    id: "8",
    account_code: "5000",
    account_name: "Office Expenses",
    account_type: "Expense",
    parent_group: "Operating Expenses",
  },
  {
    id: "9",
    account_code: "5100",
    account_name: "Salary Expense",
    account_type: "Expense",
    parent_group: "Operating Expenses",
  },
  {
    id: "10",
    account_code: "5200",
    account_name: "Utilities Expense",
    account_type: "Expense",
    parent_group: "Operating Expenses",
  },
];
