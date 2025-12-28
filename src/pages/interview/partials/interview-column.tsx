import { ColumnDef } from "@tanstack/react-table";
import { IInterviewListItem } from "../hooks/use-interview-list";
import { useDelete } from "@/hooks/useDelete";
import { useUpdateModal } from "@/hooks/update-modal";
import { Checkbox } from "@/components/ui/checkbox";
import TableAction from "@/components/TableAction";

export const interviewData: IInterviewListItem[] = [
  {
    id: "1",
    candidate: "Arjun Singh",
    job: "Frontend Developer",
    date: "2024-12-10",
    mode: "Online",
    interviewer_name: "Rahul Mehta",
    remarks: "Strong React fundamentals and good communication.",
    result: "Selected",
    created_at: "2024-12-01T10:15:00Z",
  },
  {
    id: "2",
    candidate: "Ramesh Sharma",
    job: "Backend Developer",
    date: "2024-12-11",
    mode: "Onsite",
    interviewer_name: "Anita Verma",
    remarks: "Good understanding of Node.js and databases.",
    result: "Selected",
    created_at: "2024-12-02T09:30:00Z",
  },
  {
    id: "3",
    candidate: "Sita Thapa",
    job: "UI/UX Designer",
    date: "2024-12-12",
    mode: "Online",
    interviewer_name: "Kunal Joshi",
    remarks: "Creative designs but lacks product thinking.",
    result: "Rejected",
    created_at: "2024-12-03T11:45:00Z",
  },
  {
    id: "4",
    candidate: "Anil Gurung",
    job: "DevOps Engineer",
    date: "2024-12-13",
    mode: "Onsite",
    interviewer_name: "Suresh Adhikari",
    remarks: "Solid AWS knowledge, needs more Kubernetes experience.",
    result: "Pending",
    created_at: "2024-12-04T14:20:00Z",
  },
  {
    id: "5",
    candidate: "Maya Rai",
    job: "QA Engineer",
    date: "2024-12-14",
    mode: "Online",
    interviewer_name: "Neha Kapoor",
    remarks: "Strong testing mindset and automation basics.",
    result: "Selected",
    created_at: "2024-12-05T08:50:00Z",
  },
  {
    id: "6",
    candidate: "Binod Khanal",
    job: "Full Stack Developer",
    date: "2024-12-15",
    mode: "Online",
    interviewer_name: "Amit Srivastava",
    remarks: "Good overall skills but slow problem-solving.",
    result: "Pending",
    created_at: "2024-12-06T13:10:00Z",
  },
  {
    id: "7",
    candidate: "Sushma Magar",
    job: "HR Executive",
    date: "2024-12-16",
    mode: "Onsite",
    interviewer_name: "Pooja Malhotra",
    remarks: "Excellent communication and culture fit.",
    result: "Selected",
    created_at: "2024-12-07T16:05:00Z",
  },
  {
    id: "8",
    candidate: "Rajesh Basnet",
    job: "Data Analyst",
    date: "2024-12-17",
    mode: "Online",
    interviewer_name: "Vikram Rao",
    remarks: "Good SQL skills, needs improvement in statistics.",
    result: "Rejected",
    created_at: "2024-12-08T10:40:00Z",
  },
  {
    id: "9",
    candidate: "Priya Adhikari",
    job: "Mobile App Developer",
    date: "2024-12-18",
    mode: "Online",
    interviewer_name: "Sanjay Patel",
    remarks: "Strong Flutter skills and clean architecture.",
    result: "Selected",
    created_at: "2024-12-09T12:55:00Z",
  },
  {
    id: "10",
    candidate: "Kiran Shrestha",
    job: "System Administrator",
    date: "2024-12-19",
    mode: "Onsite",
    interviewer_name: "Manish Gupta",
    remarks: "Good Linux knowledge, average scripting skills.",
    result: "Pending",
    created_at: "2024-12-10T09:00:00Z",
  },
];

const InterviewColumns = (): ColumnDef<IInterviewListItem>[] => {
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
      header: "Interview Date",
      accessorKey: "date",
      size: 400,
    },
    {
      header: "Interview Mode",
      accessorKey: "mode",
      size: 400,
    },
    {
      header: "Interviewer Name",
      accessorKey: "interviewer_name",
      size: 400,
    },
    {
      header: "Remarks",
      accessorKey: "remarks",
      size: 600,
    },
    {
      header: "Result",
      accessorKey: "result",
      size: 200,
    },
    {
      header: "Created At",
      accessorKey: "created_at",
      cell: ({ getValue }) => {
        return <span>{new Date(getValue() as string).toLocaleString()}</span>;
      },
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

export default InterviewColumns;
