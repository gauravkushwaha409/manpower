import { ColumnDef } from "@tanstack/react-table";
import { IChartOfGroupListItem } from "../hooks/use-chart-of-group-list";
import { Checkbox } from "@/components/ui/checkbox";
import TableAction from "@/components/TableAction";
import { useDelete } from "@/hooks/useDelete";
import { useUpdateModal } from "@/hooks/update-modal";

const ChartOfGroupColumn = (): ColumnDef<IChartOfGroupListItem>[] => {
  const { handleOpenModal: handleOpenDeleteModal } = useDelete({});
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
      header: "Group Name",
      accessorKey: "group_name",
      size: 200,
    },
    {
      header: "Group Parent",
      accessorKey: "group_parent",
      size: 200,
    },
    {
      header: "Group Type",
      accessorKey: "group_type",
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

export default ChartOfGroupColumn;

export const chartOfGroupData: IChartOfGroupListItem[] = [
  {
    id: "1",
    group_name: "Current Assets",
    group_type: "Asset",
    group_parent: "Assets",
  },
  {
    id: "2",
    group_name: "Fixed Assets",
    group_type: "Asset",
    group_parent: "Assets",
  },
  {
    id: "3",
    group_name: "Current Liabilities",
    group_type: "Liability",
    group_parent: "Liabilities",
  },
  {
    id: "4",
    group_name: "Long-term Liabilities",
    group_type: "Liability",
    group_parent: "Liabilities",
  },
  {
    id: "5",
    group_name: "Equity",
    group_type: "Equity",
    group_parent: "Equity",
  },
  {
    id: "6",
    group_name: "Revenue",
    group_type: "Income",
    group_parent: "Income",
  },
  {
    id: "7",
    group_name: "Operating Expenses",
    group_type: "Expense",
    group_parent: "Expenses",
  },
  {
    id: "8",
    group_name: "Administrative Expenses",
    group_type: "Expense",
    group_parent: "Expenses",
  },
  {
    id: "9",
    group_name: "Other Income",
    group_type: "Income",
    group_parent: "Income",
  },
  {
    id: "10",
    group_name: "Cost of Goods Sold",
    group_type: "Expense",
    group_parent: "Expenses",
  },
];
