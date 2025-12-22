import TableAction from "@/components/TableAction";
import { ColumnDef } from "@tanstack/react-table";
interface ICategory {
  id: string;
  industry: string;
  category: string;
  icon: string;
}

export const categoryData: ICategory[] = [
  {
    id: "1",
    icon: "",
    industry: "",
    category: "",
  },
];

export const CategoryColumns: ColumnDef<ICategory>[] = [
  {
    header: "S.N.",
    cell: ({ row }) => row.index + 1,
  },
  {
    header: "Icon",
    cell: ({ row }) => (
      <img
        src={row?.original?.icon}
        alt=""
        className="size-10 object-contain"
      />
    ),
  },
  {
    header: "Industry",
    accessorKey: "industry",
  },
  {
    header: "Industry",
    accessorKey: "category",
  },
  {
    header: "Action",
    cell: () => <TableAction />,
  },
];
