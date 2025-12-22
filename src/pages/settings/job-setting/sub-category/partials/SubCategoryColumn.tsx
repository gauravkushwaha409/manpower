import TableAction from "@/components/TableAction";
import { ColumnDef } from "@tanstack/react-table";

interface ISubCategory {
  id: string;
  category: string;
  subCategory: string;
  icon: string;
}

export const subCategoryData: ISubCategory[] = [
  {
    id: "1",
    category: "",
    subCategory: "",
    icon: "",
  },
];

export const SubCategoryColumns: ColumnDef<ISubCategory>[] = [
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
    header: "Category",
    accessorKey: "category",
  },
  {
    header: "Sub Category",
    accessorKey: "subCategory",
  },
  {
    header: "Action",
    cell: () => <TableAction />,
  },
];
