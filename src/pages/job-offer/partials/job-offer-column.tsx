import TableAction from "@/components/TableAction";
import { ColumnDef } from "@tanstack/react-table";
import { IJobOfferListItem } from "../hooks/use-job-offer-list";
import { useDelete } from "@/hooks/useDelete";
import { useUpdateModal } from "@/hooks/update-modal";
import { Checkbox } from "@/components/ui/checkbox";
import { File } from "lucide-react";

export const jobOfferData: IJobOfferListItem[] = [
  {
    id: "1",
    candidate: "Arjun Singh",
    job: "Frontend Developer",
    offer_letter_no: "OL-2024-001",
    offer_date: "2024-12-05",
    joining_date: "2025-01-10",
    offer_document: "offer_letters/OL-2024-001.pdf",
    issued_by: "HR Department",
    created_at: "2024-12-05T09:15:00Z",
  },
  {
    id: "2",
    candidate: "Ramesh Sharma",
    job: "Backend Developer",
    offer_letter_no: "OL-2024-002",
    offer_date: "2024-12-06",
    joining_date: "2025-01-15",
    offer_document: "offer_letters/OL-2024-002.pdf",
    issued_by: "HR Department",
    created_at: "2024-12-06T10:30:00Z",
  },
  {
    id: "3",
    candidate: "Maya Rai",
    job: "QA Engineer",
    offer_letter_no: "OL-2024-003",
    offer_date: "2024-12-07",
    joining_date: "2025-01-20",
    offer_document: "offer_letters/OL-2024-003.pdf",
    issued_by: "Recruitment Team",
    created_at: "2024-12-07T11:45:00Z",
  },
  {
    id: "4",
    candidate: "Sushma Magar",
    job: "HR Executive",
    offer_letter_no: "OL-2024-004",
    offer_date: "2024-12-08",
    joining_date: "2025-02-01",
    offer_document: "offer_letters/OL-2024-004.pdf",
    issued_by: "HR Manager",
    created_at: "2024-12-08T08:50:00Z",
  },
  {
    id: "5",
    candidate: "Binod Khanal",
    job: "Full Stack Developer",
    offer_letter_no: "OL-2024-005",
    offer_date: "2024-12-09",
    joining_date: "2025-02-10",
    offer_document: "offer_letters/OL-2024-005.pdf",
    issued_by: "Technical Lead",
    created_at: "2024-12-09T14:20:00Z",
  },
  {
    id: "6",
    candidate: "Priya Adhikari",
    job: "Mobile App Developer",
    offer_letter_no: "OL-2024-006",
    offer_date: "2024-12-10",
    joining_date: "2025-02-15",
    offer_document: "offer_letters/OL-2024-006.pdf",
    issued_by: "Engineering Manager",
    created_at: "2024-12-10T09:40:00Z",
  },
  {
    id: "7",
    candidate: "Rajesh Basnet",
    job: "Data Analyst",
    offer_letter_no: "OL-2024-007",
    offer_date: "2024-12-11",
    joining_date: "2025-02-20",
    offer_document: "offer_letters/OL-2024-007.pdf",
    issued_by: "Analytics Lead",
    created_at: "2024-12-11T12:10:00Z",
  },
  {
    id: "8",
    candidate: "Kiran Shrestha",
    job: "System Administrator",
    offer_letter_no: "OL-2024-008",
    offer_date: "2024-12-12",
    joining_date: "2025-03-01",
    offer_document: "offer_letters/OL-2024-008.pdf",
    issued_by: "IT Manager",
    created_at: "2024-12-12T10:00:00Z",
  },
];

const JobOfferColumns = (): ColumnDef<IJobOfferListItem>[] => {
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
      header: "Offer Letter No",
      accessorKey: "offer_letter_no",
      size: 400,
    },
    {
      header: "Offer Date",
      accessorKey: "offer_date",
      size: 200,
    },
    {
      header: "Joining Date",
      accessorKey: "joining_date",
      size: 200,
    },
    {
      header: "Offer Document",
      cell: () => (
        <File
          onClick={() => {
            window.open(
              "https://images.unsplash.com/photo-1694432293460-6b1d7c12d21b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDB8fG9mZmVyJTIwbGV0dGVyfGVufDB8fDB8fHww",
              "_blank"
            );
          }}
        />
      ),
      size: 200,
    },
    {
      header: "Issued By",
      accessorKey: "issued_by",
      size: 400,
    },
    {
      header: "Created At",
      accessorKey: "created_at",
      cell: ({ getValue }) => {
        return <span>{new Date(getValue() as string).toLocaleString()}</span>;
      },
      size: 250,
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

export default JobOfferColumns;
