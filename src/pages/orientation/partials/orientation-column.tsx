import TableAction from "@/components/TableAction";
import { ColumnDef } from "@tanstack/react-table";
import { useDelete } from "@/hooks/useDelete";
import { useUpdateModal } from "@/hooks/update-modal";
import { Checkbox } from "@/components/ui/checkbox";
import { IOrientationListItem } from "../hooks/use-orientation-list";
import { File } from "lucide-react";
import { OrientationStatusType } from "../schema/orientation-schema";
import useUpdateOrientationStatusModal from "../hooks/use-update-orientation-status-modal";

export const orientationData: IOrientationListItem[] = [
  {
    id: "1",
    candidate_name: "Ramesh Kumar",
    candidate_job: "Frontend Developer",
    employer_name: "Tech Solutions Pvt Ltd",
    institute_name: "Global Training Institute",
    orientation_date: "2024-03-01",
    orientation_location: "Kathmandu",
    orientation_status: "attended",
  },
  {
    id: "2",
    candidate_name: "Sita Sharma",
    candidate_job: "Backend Engineer",
    employer_name: "Nepal IT Services",
    institute_name: "IT Learning Center",
    orientation_date: "2024-03-03",
    orientation_location: "Lalitpur",
    orientation_status: "schedule",
  },
  {
    id: "3",
    candidate_name: "Amit Singh",
    candidate_job: "UI/UX Designer",
    employer_name: "Creative Labs",
    institute_name: "Design Academy",
    orientation_date: "2024-03-05",
    orientation_location: "Bhaktapur",
    orientation_status: "not-attended",
  },
  {
    id: "4",
    candidate_name: "Priya Verma",
    candidate_job: "DevOps Engineer",
    employer_name: "CloudOps Inc",
    institute_name: "TechHub Training",
    orientation_date: "2024-03-07",
    orientation_location: "Kathmandu",
    orientation_status: "attended",
  },
  {
    id: "5",
    candidate_name: "Rahul Das",
    candidate_job: "QA Engineer",
    employer_name: "QualitySoft",
    institute_name: "QA Institute",
    orientation_date: "2024-03-09",
    orientation_location: "Lalitpur",
    orientation_status: "schedule",
  },
  {
    id: "6",
    candidate_name: "Maya Rai",
    candidate_job: "Frontend Developer",
    employer_name: "NextGen Solutions",
    institute_name: "Global Training Institute",
    orientation_date: "2024-03-11",
    orientation_location: "Bhaktapur",
    orientation_status: "attended",
  },
  {
    id: "7",
    candidate_name: "Anil Gurung",
    candidate_job: "Backend Developer",
    employer_name: "Tech Valley",
    institute_name: "IT Learning Center",
    orientation_date: "2024-03-13",
    orientation_location: "Kathmandu",
    orientation_status: "not-attended",
  },
  {
    id: "8",
    candidate_name: "Suman Thapa",
    candidate_job: "UI/UX Designer",
    employer_name: "Creative Minds",
    institute_name: "Design Academy",
    orientation_date: "2024-03-15",
    orientation_location: "Lalitpur",
    orientation_status: "schedule",
  },
  {
    id: "9",
    candidate_name: "Neha Singh",
    candidate_job: "DevOps Engineer",
    employer_name: "CloudOps Inc",
    institute_name: "TechHub Training",
    orientation_date: "2024-03-17",
    orientation_location: "Bhaktapur",
    orientation_status: "attended",
  },
  {
    id: "10",
    candidate_name: "Rohit Sharma",
    candidate_job: "QA Engineer",
    employer_name: "QualitySoft",
    institute_name: "QA Institute",
    orientation_date: "2024-03-19",
    orientation_location: "Kathmandu",
    orientation_status: "schedule",
  },
];

const OrientationColumns = (): ColumnDef<IOrientationListItem>[] => {
  const { handleOpenModal: handleOpenDeleteModal } = useDelete({});
  const { handleOpenModal: handleOpenUpdateModal } = useUpdateModal();
  const { handleOpenOrientationStatusModal } =
    useUpdateOrientationStatusModal();

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
      header: "Institute Name",
      accessorKey: "institute_name",
      size: 400,
    },
    {
      header: "Orientation Date",
      accessorKey: "orientation_date",
      size: 400,
    },
    {
      header: "Orientation Location",
      accessorKey: "orientation_location",
      size: 400,
    },
    {
      header: "Status",
      accessorKey: "status",
      cell: ({ row }) => (
        <OrientationStatusButton
          handleClick={handleOpenOrientationStatusModal}
          status={row?.original?.orientation_status}
        />
      ),
      size: 400,
    },
    {
      header: "Orientation Document",
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

type StatusButtonProps = {
  status: OrientationStatusType;
  handleClick: (status: OrientationStatusType) => void;
};

const STATUS_STYLES: Record<OrientationStatusType, string> = {
  attended:
    "bg-green-100 text-green-700 border border-green-300 hover:bg-green-200",
  "not-attended":
    "bg-red-100 text-red-700 border border-red-300 hover:bg-red-200",
  schedule:
    "bg-yellow-100 text-yellow-800 border border-yellow-300 hover:bg-yellow-200",
};

function OrientationStatusButton({ status, handleClick }: StatusButtonProps) {
  return (
    <button
      type="button"
      onClick={(e) => {
        e.preventDefault();
        handleClick(status);
      }}
      className={`u-status-button-base-style ${STATUS_STYLES[status]}`}
    >
      {status.charAt(0).toUpperCase() + status.slice(1)}
    </button>
  );
}
