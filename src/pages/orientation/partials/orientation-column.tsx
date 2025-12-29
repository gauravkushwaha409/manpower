import TableAction from "@/components/TableAction";
import { ColumnDef } from "@tanstack/react-table";
import { useDelete } from "@/hooks/useDelete";
import { useUpdateModal } from "@/hooks/update-modal";
import { Checkbox } from "@/components/ui/checkbox";
import { IOrientationListItem } from "../hooks/use-orientation-list";
import { File } from "lucide-react";

export const orientationData: IOrientationListItem[] = [
  {
    id: "1",
    candidate: "Arjun Singh",
    job: "Frontend Developer",
  },
  {
    id: "2",
    candidate: "Ramesh Sharma",
    job: "Backend Developer",
  },
  {
    id: "3",
    candidate: "Sita Thapa",
    job: "UI/UX Designer",
  },
  {
    id: "4",
    candidate: "Anil Gurung",
    job: "DevOps Engineer",
  },
  {
    id: "5",
    candidate: "Maya Rai",
    job: "QA Engineer",
  },
];

const OrientationColumns = (): ColumnDef<IOrientationListItem>[] => {
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
      header: "Candidate Name",
      accessorKey: "candidate",
      size: 400,
    },
    {
      header: "Candidate Job",
      accessorKey: "job",
      size: 400,
    },
    {
      header: "Orientation Type",
      accessorKey: "orientation_type",
      size: 200,
    },
    {
      header: "Application Date",
      accessorKey: "application_date",
      size: 200,
    },
    {
      header: "Approval Date",
      accessorKey: "approval_date",
      size: 200,
    },
    {
      header: "Orientation Expire",
      accessorKey: "orientation_expire",
      size: 200,
    },
    {
      header: "Orientation Expire",
      accessorKey: "orientation_expire",
      size: 200,
    },
    {
      header: "Status",
      accessorKey: "status",
      size: 200,
    },
    {
      header: "Orientation File",
      cell: () => (
        <File
          onClick={() => {
            window.open(
              "https://www.embassyofcambodiadc.org/uploads/9/8/1/8/98182996/a-sample-spouse-signed_orig.jpg",
              "_blank"
            );
          }}
        />
      ),
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

export default OrientationColumns;
