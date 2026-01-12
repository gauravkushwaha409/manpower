import TableAction from "@/components/TableAction";
import { ColumnDef } from "@tanstack/react-table";
import { ICategoryListItem } from "../hooks/use-category-list";
import { Checkbox } from "@/components/ui/checkbox";
import { useDelete } from "@/hooks/useDelete";
import { useUpdateModal } from "@/hooks/use-update-modal";

export const categoryData: ICategoryListItem[] = [
  {
    id: "1",
    industry: " Information Technology",
    category: "Software Development",
    icon: "",
  },
  {
    id: "1",
    industry: " Information Technology",
    category: "Infrastructure",
    icon: "",
  },
  {
    id: "1",
    industry: "Healthcare & Medical",
    category: "Clinical Staff",
    icon: "",
  },
  {
    id: "1",
    industry: "Healthcare & Medical",
    category: "Non-Clinical Staff",
    icon: "",
  },
  {
    id: "1",
    industry: "Manufacturing & Engineering",
    category: "Production",
    icon: "",
  },
  {
    id: "1",
    industry: "Manufacturing & Engineering",
    category: "Engineering",
    icon: "",
  },
  {
    id: "1",
    industry: "Retail & Hospitality",
    category: "Retail",
    icon: "",
  },
  {
    id: "1",
    industry: "Professional Services",
    category: "Finance & Accounting",
    icon: "",
  },
];

const CategoryColumns = (): ColumnDef<ICategoryListItem>[] => {
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
      size: 50,
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
      size: 200,
    },
    {
      header: "Industry",
      accessorKey: "industry",
      size: 400,
    },
    {
      header: "Category",
      accessorKey: "category",
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
export default CategoryColumns;
