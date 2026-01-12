import TableAction from "@/components/TableAction";
import { ColumnDef } from "@tanstack/react-table";
import { ISubCategoryListItem } from "../hooks/use-sub-category-list";
import { useUpdateModal } from "@/hooks/use-update-modal";
import { useDelete } from "@/hooks/useDelete";
import { Checkbox } from "@/components/ui/checkbox";

export const subCategoryData: ISubCategoryListItem[] = [
  {
    id: "1",
    industry: "Information Technology",
    category: "Software Development",
    sub_category: "Frontend Developers",
    icon: "",
  },
  {
    id: "2",
    industry: "Information Technology",
    category: "Software Development",
    sub_category: "Backend Developers",
    icon: "",
  },
  {
    id: "3",
    industry: "Information Technology",
    category: "IT Infrastructure",
    sub_category: "Network Administrators",
    icon: "",
  },
  {
    id: "4",
    industry: "Information Technology",
    category: "IT Infrastructure",
    sub_category: "System Administrators",
    icon: "",
  },
  {
    id: "5",
    industry: "Healthcare & Medical",
    category: "Clinical Staff",
    sub_category: "Registered Nurses",
    icon: "",
  },
  {
    id: "6",
    industry: "Healthcare & Medical",
    category: "Clinical Staff",
    sub_category: "Medical Doctors",
    icon: "",
  },
];

const SubCategoryColumns = (): ColumnDef<ISubCategoryListItem>[] => {
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
      header: "Sub Category",
      accessorKey: "sub_category",
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
export default SubCategoryColumns;
