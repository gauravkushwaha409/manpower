import TableAction from "@/components/TableAction";
import { ColumnDef } from "@tanstack/react-table";
import { useDelete } from "@/hooks/useDelete";
import { useUpdateModal } from "@/hooks/update-modal";
import { Checkbox } from "@/components/ui/checkbox";
import { IVisaListItem } from "../hooks/use-visa-list";
import { File } from "lucide-react";

export const visaData: IVisaListItem[] = [
  {
    id: "1",
    candidate: "Arjun Singh",
    job: "Frontend Developer",
    visa_type: "Work Visa",
    application_date: "2024-11-15",
    approval_date: "2024-12-05",
    visa_expire: "2026-12-04",
    status: "Approved",
    visa_file: "visa_documents/visa-001.pdf",
  },
  {
    id: "2",
    candidate: "Ramesh Sharma",
    job: "Backend Developer",
    visa_type: "Work Visa",
    application_date: "2024-11-18",
    approval_date: "2024-12-08",
    visa_expire: "2026-12-07",
    status: "Approved",
    visa_file: "visa_documents/visa-002.pdf",
  },
  {
    id: "3",
    candidate: "Sita Thapa",
    job: "UI/UX Designer",
    visa_type: "Employment Visa",
    application_date: "2024-11-20",
    approval_date: "",
    visa_expire: "",
    status: "Pending",
    visa_file: "visa_documents/visa-003.pdf",
  },
  {
    id: "4",
    candidate: "Anil Gurung",
    job: "DevOps Engineer",
    visa_type: "Work Visa",
    application_date: "2024-11-22",
    approval_date: "2024-12-12",
    visa_expire: "2026-12-11",
    status: "Approved",
    visa_file: "visa_documents/visa-004.pdf",
  },
  {
    id: "5",
    candidate: "Maya Rai",
    job: "QA Engineer",
    visa_type: "Work Visa",
    application_date: "2024-11-25",
    approval_date: "",
    visa_expire: "",
    status: "Rejected",
    visa_file: "visa_documents/visa-005.pdf",
  },
  {
    id: "6",
    candidate: "Binod Khanal",
    job: "Full Stack Developer",
    visa_type: "Employment Visa",
    application_date: "2024-11-28",
    approval_date: "",
    visa_expire: "",
    status: "Pending",
    visa_file: "visa_documents/visa-006.pdf",
  },
  {
    id: "7",
    candidate: "Sushma Magar",
    job: "HR Executive",
    visa_type: "Work Visa",
    application_date: "2024-12-01",
    approval_date: "2024-12-15",
    visa_expire: "2026-12-14",
    status: "Approved",
    visa_file: "visa_documents/visa-007.pdf",
  },
  {
    id: "8",
    candidate: "Rajesh Basnet",
    job: "Data Analyst",
    visa_type: "Work Visa",
    application_date: "2024-12-03",
    approval_date: "",
    visa_expire: "",
    status: "Pending",
    visa_file: "visa_documents/visa-008.pdf",
  },
];

const VisaColumns = (): ColumnDef<IVisaListItem>[] => {
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
      header: "Visa Type",
      accessorKey: "visa_type",
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
      header: "Visa Expire",
      accessorKey: "visa_expire",
      size: 200,
    },
    {
      header: "Visa Expire",
      accessorKey: "visa_expire",
      size: 200,
    },
    {
      header: "Status",
      accessorKey: "status",
      size: 200,
    },
    {
      header: "Visa File",
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

export default VisaColumns;
