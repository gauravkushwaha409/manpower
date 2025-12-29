import TableAction from "@/components/TableAction";
import { ColumnDef } from "@tanstack/react-table";
import { useNavigate } from "react-router-dom";
import { useDelete } from "@/hooks/useDelete";
import { PATH } from "@/constant/path";
import { Checkbox } from "@/components/ui/checkbox";
import { ICandidateListItem } from "../hooks/use-candidate-list";
import { useJobByCandidateModal } from "../hooks/use-job-by-candidate";

export const candidateData: ICandidateListItem[] = [
  {
    id: "1",
    first_name: "Ramesh",
    last_name: "Sharma",
    phone_no: "9828890073",
    passport_no: "PA1234567",
    company_name: "Al Futtaim Group",
    interview_process: "Selected",
    address: "Kathmandu, Nepal",
  },
  {
    id: "2",
    first_name: "Sita",
    last_name: "Thapa",
    phone_no: "9841234567",
    passport_no: "PA2345678",
    company_name: "Ncell",
    interview_process: "Rejected",
    address: "Lalitpur, Nepal",
  },
  {
    id: "3",
    first_name: "Anil",
    last_name: "Gurung",
    phone_no: "9801122334",
    passport_no: "PA3456789",
    company_name: "KPMG",
    interview_process: "Pending",
    address: "Pokhara, Nepal",
  },
  {
    id: "4",
    first_name: "Maya",
    last_name: "Rai",
    phone_no: "9812233445",
    passport_no: "PA4567890",
    company_name: "Daraz",
    interview_process: "Selected",
    address: "Biratnagar, Nepal",
  },
  {
    id: "5",
    first_name: "Binod",
    last_name: "Khanal",
    phone_no: "9856677889",
    passport_no: "PA5678901",
    company_name: "Prabhu Bank",
    interview_process: "Rejected",
    address: "Bhaktapur, Nepal",
  },
  {
    id: "6",
    first_name: "Sushma",
    last_name: "Magar",
    phone_no: "9867788990",
    passport_no: "PA6789012",
    company_name: "Himalayan Bank",
    interview_process: "Selected",
    address: "Kathmandu, Nepal",
  },
  {
    id: "7",
    first_name: "Rajesh",
    last_name: "Basnet",
    phone_no: "9878899001",
    passport_no: "PA7890123",
    company_name: "Unilever",
    interview_process: "Pending",
    address: "Chitwan, Nepal",
  },
  {
    id: "8",
    first_name: "Priya",
    last_name: "Adhikari",
    phone_no: "9812345678",
    passport_no: "PA8901234",
    company_name: "Nabil Bank",
    interview_process: "Selected",
    address: "Dhulikhel, Nepal",
  },
  {
    id: "9",
    first_name: "Kiran",
    last_name: "Shrestha",
    phone_no: "9809876543",
    passport_no: "PA9012345",
    company_name: "Nepal Telecom",
    interview_process: "Rejected",
    address: "Kathmandu, Nepal",
  },
  {
    id: "10",
    first_name: "Alisha",
    last_name: "Thapa",
    phone_no: "9845566778",
    passport_no: "PA0123456",
    company_name: "Worldlink",
    interview_process: "Pending",
    address: "Lalitpur, Nepal",
  },
];

export const CandidateColumns = (): ColumnDef<ICandidateListItem>[] => {
  const navigate = useNavigate();
  const { handleOpenJobByCandidate } = useJobByCandidateModal();
  const { handleOpenModal } = useDelete({});
  const handleUpdateClick = (id: string) => {
    navigate(PATH.candidate.update.replace(":id", id));
  };
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
      header: "SN",
      accessorKey: "sn",
      cell: ({ row }) => row.index + 1,
      size: 100,
    },
    {
      header: "Candidate Name",
      cell: ({ row }) => (
        <button
          onClick={(e) => {
            e.preventDefault();
            handleOpenJobByCandidate(row?.original?.id);
          }}
          className="cursor-pointer"
        >
          {row?.original?.first_name + " " + row?.original?.last_name}
        </button>
      ),
      size: 400,
    },

    {
      header: "Phone Number",
      accessorKey: "phone_no",
      size: 200,
    },
    {
      header: "Address",
      accessorKey: "address",
      size: 300,
    },
    {
      header: "Passport Number",
      accessorKey: "passport_no",
      size: 300,
    },
    {
      header: "Employer Name",
      accessorKey: "company_name",
      size: 200,
    },
    {
      header: "Action",
      accessorKey: "action",
      cell: ({ row }) => (
        <TableAction
          del={{
            active: true,
            onClick: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
              e.preventDefault();
              handleOpenModal(row?.original?.id);
            },
          }}
          edit={{
            active: true,
            onClick: (e: React.MouseEvent<HTMLButtonElement>) => {
              e.preventDefault();
              handleUpdateClick(row?.original?.id);
            },
          }}
          view={{ active: true }}
        />
      ),
    },
  ];
};
