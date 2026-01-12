import TableAction from "@/components/TableAction";
import { ColumnDef } from "@tanstack/react-table";
import { useUpdateModal } from "@/hooks/use-update-modal";
import { useDelete } from "@/hooks/useDelete";
import { Checkbox } from "@/components/ui/checkbox";
import { IJobTitleListItem } from "../hooks/use-job-title-list";

export const jobTitleData: IJobTitleListItem[] = [
  {
    id: "1",
    industry: "Information Technology",
    category: "Software Development",
    sub_category: "Frontend Developers",
    job_title: "Angular Developer",
    icon: "",
  },
  {
    id: "2",
    industry: "Information Technology",
    category: "Software Development",
    sub_category: "Backend Developer",
    job_title: "Nest Js Developer",
    icon: "",
  },
  {
    id: "3",
    industry: "Information Technology",
    category: "IT Infrastructure",
    sub_category: "Network Administrators",
    job_title: "Senior Network Infrastructure Engineer",
    icon: "",
  },
  {
    id: "4",
    industry: "Information Technology",
    category: "IT Infrastructure",
    sub_category: "System Administrators",
    job_title: "Cloud Systems Administrator",
    icon: "",
  },
  {
    id: "5",
    industry: "Healthcare & Medical",
    category: "Clinical Staff",
    sub_category: "Registered Nurses",
    job_title: "Registered Nurse - Intensive Care Unit",
    icon: "",
  },
  {
    id: "6",
    industry: "Healthcare & Medical",
    category: "Clinical Staff",
    sub_category: "Medical Doctors",
    job_title: "General Practitioner / Family Physician",
    icon: "",
  },
];

const JobTitleColumns = (): ColumnDef<IJobTitleListItem>[] => {
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
      header: "Job Title",
      accessorKey: "job_title",
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
export default JobTitleColumns;
