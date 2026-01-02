import { ColumnDef } from "@tanstack/react-table";
import { IInterviewListItem } from "../hooks/use-interview-list";
import { useDelete } from "@/hooks/useDelete";
import { useUpdateModal } from "@/hooks/use-update-modal";
import { Checkbox } from "@/components/ui/checkbox";
import TableAction from "@/components/TableAction";
import { InterviewResultType } from "../schema/interview-schema";
import { useInterviewResultModal } from "../hooks/use-update-interview-result";

export const interviewData: IInterviewListItem[] = [
  {
    id: "1",
    candidate_name: "Aarav Sharma",
    candidate_job: "Frontend Developer",
    employer_name: "TechNova Solutions",
    interview_date: "2025-01-12",
    interview_mode: "online",
    interview_location: "Google Meet",
    interviewer_name: "Ramesh Adhikari",
    remarks: "Strong React fundamentals and good communication skills.",
    result: "selected",
    created_at: "2025-01-10T09:30:00Z",
  },
  {
    id: "2",
    candidate_name: "Sita Koirala",
    candidate_job: "Backend Developer",
    employer_name: "CloudCore Pvt Ltd",
    interview_date: "2025-01-14",
    interview_mode: "onsite",
    interview_location: "Kathmandu Office",
    interviewer_name: "Anil Shrestha",
    remarks:
      "Good understanding of NestJS, needs improvement in system design.",
    result: "pending",
    created_at: "2025-01-11T11:15:00Z",
  },
  {
    id: "3",
    candidate_name: "Bikash Thapa",
    candidate_job: "Full Stack Developer",
    employer_name: "InnovateX Labs",
    interview_date: "2025-01-15",
    interview_mode: "online",
    interview_location: "Zoom",
    interviewer_name: "Prakash Bhandari",
    remarks:
      "Solid backend skills, frontend performance optimizations were weak.",
    result: "rejected",
    created_at: "2025-01-12T08:45:00Z",
  },
  {
    id: "4",
    candidate_name: "Nisha Gurung",
    candidate_job: "UI/UX Engineer",
    employer_name: "DesignHub Studio",
    interview_date: "2025-01-18",
    interview_mode: "onsite",
    interview_location: "Lalitpur Office",
    interviewer_name: "Sunita Rana",
    remarks: "Excellent design sense and user-centric thinking.",
    result: "selected",
    created_at: "2025-01-13T14:20:00Z",
  },
  {
    id: "5",
    candidate_name: "Rohit Poudel",
    candidate_job: "QA Engineer",
    employer_name: "QualityFirst Systems",
    interview_date: "2025-01-20",
    interview_mode: "online",
    interview_location: "Microsoft Teams",
    interviewer_name: "Kiran Basnet",
    remarks: "Good testing knowledge but lacks automation experience.",
    result: "pending",
    created_at: "2025-01-14T10:05:00Z",
  },
];

const InterviewColumns = (): ColumnDef<IInterviewListItem>[] => {
  const { handleOpenModal: handleOpenDeleteModal } = useDelete({});
  const { handleOpenModal: handleOpenUpdateModal } = useUpdateModal();
  const { handleStatusClick } = useInterviewResultModal();

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
      accessorKey: "candidate_name",
      size: 400,
    },
    {
      header: "Candidate Job",
      accessorKey: "candidate_job",
      size: 400,
    },
    {
      header: "Employer Name",
      accessorKey: "employer_name",
      size: 400,
    },
    {
      header: "Interview Date",
      accessorKey: "interview_date",
      size: 400,
    },
    {
      header: "Interview Mode",
      accessorKey: "interview_mode",
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
      cell: ({ row }) => (
        <StatusButton
          handleClick={() => {
            handleStatusClick(row?.original?.id, row?.original?.result);
          }}
          status={row?.original?.result}
        />
      ),
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

// Sub component
type StatusButtonProps = {
  status: InterviewResultType;
  handleClick: () => void;
};

const STATUS_STYLES: Record<InterviewResultType, string> = {
  selected:
    "bg-green-100 text-green-700 border border-green-300 hover:bg-green-200",
  rejected: "bg-red-100 text-red-700 border border-red-300 hover:bg-red-200",
  pending:
    "bg-yellow-100 text-yellow-800 border border-yellow-300 hover:bg-yellow-200",
};

function StatusButton({ status, handleClick }: StatusButtonProps) {
  return (
    <button
      type="button"
      onClick={(e) => {
        e.preventDefault();
        handleClick();
      }}
      className={`   u-status-button-base-style ${STATUS_STYLES[status]}`}
    >
      {status.charAt(0).toUpperCase() + status.slice(1)}
    </button>
  );
}
