import TableAction from "@/components/TableAction";
import { ColumnDef } from "@tanstack/react-table";
import { useDelete } from "@/hooks/useDelete";
import { useUpdateModal } from "@/hooks/update-modal";
import { Checkbox } from "@/components/ui/checkbox";
import { IShramListItem } from "../hooks/use-shram-list";
import { File } from "lucide-react";

export const shramData: IShramListItem[] = [
  {
    id: "1",
    candidate: "Ramesh Kumar",
    job: "Frontend Developer",
    ols_reference_no: "OLS-2024-00123",
    approval_date: "2024-02-15",
    approval_file: "approval_ramesh_kumar.pdf",
  },
  {
    id: "2",
    candidate: "Sita Sharma",
    job: "Backend Engineer",
    ols_reference_no: "OLS-2024-00124",
    approval_date: "2024-02-18",
    approval_file: "approval_sita_sharma.pdf",
  },
  {
    id: "3",
    candidate: "Amit Singh",
    job: "Full Stack Developer",
    ols_reference_no: "OLS-2024-00125",
    approval_date: "2024-02-20",
    approval_file: "approval_amit_singh.pdf",
  },
  {
    id: "4",
    candidate: "Priya Verma",
    job: "UI/UX Designer",
    ols_reference_no: "OLS-2024-00126",
    approval_date: "2024-02-22",
    approval_file: "approval_priya_verma.pdf",
  },
  {
    id: "5",
    candidate: "Rahul Das",
    job: "QA Engineer",
    ols_reference_no: "OLS-2024-00127",
    approval_date: "2024-02-25",
    approval_file: "approval_rahul_das.pdf",
  },
];

const ShramColumns = (): ColumnDef<IShramListItem>[] => {
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
      header: "OLS Reference No.",
      accessorKey: "ols_reference_no",
      size: 200,
    },
    {
      header: "Approval Date",
      accessorKey: "approval_date",
      size: 200,
    },
    {
      header: "Document",
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

export default ShramColumns;
