import TableAction from "@/components/TableAction";
import { ColumnDef } from "@tanstack/react-table";
import { useNavigate } from "react-router-dom";
import { useDelete } from "@/hooks/useDelete";
import { PATH } from "@/constant/path";
import { Checkbox } from "@/components/ui/checkbox";
import { ICandidateListItem } from "../hooks/use-candidate-list";

export const candidateData: ICandidateListItem[] = [
  {
    id: "1",
    first_name: "Ramesh",
    last_name: "Sharma",
    passport_no: "PA1234567",
    applied_country: "United Arab Emirates",
    company_name: "Al Futtaim Group",
    job_vacancy: "Civil Engineer",
    interview_process: "Selected",
  },
  {
    id: "2",
    first_name: "Sita",
    last_name: "Adhikari",
    passport_no: "PA2345678",
    applied_country: "Saudi Arabia",
    company_name: "Saudi Aramco",
    job_vacancy: "Registered Nurse",
    interview_process: "Visa Processing",
  },
  {
    id: "3",
    first_name: "Bikash",
    last_name: "Thapa",
    passport_no: "PA3456789",
    applied_country: "Qatar",
    company_name: "Qatar Airways",
    job_vacancy: "Security Guard",
    interview_process: "Medical Test",
  },
  {
    id: "4",
    first_name: "Anita",
    last_name: "Gurung",
    passport_no: "PA4567890",
    applied_country: "United Arab Emirates",
    company_name: "Emirates Group",
    job_vacancy: "Hotel Receptionist",
    interview_process: "Interview Scheduled",
  },
  {
    id: "5",
    first_name: "Suraj",
    last_name: "Rai",
    passport_no: "PA5678901",
    applied_country: "Kuwait",
    company_name: "Kuwait Oil Company",
    job_vacancy: "Mechanical Engineer",
    interview_process: "Document Verification",
  },
  {
    id: "6",
    first_name: "Gita",
    last_name: "Magar",
    passport_no: "PA6789012",
    applied_country: "Bahrain",
    company_name: "Bahrain Petroleum",
    job_vacancy: "Accountant",
    interview_process: "Applied",
  },
  {
    id: "7",
    first_name: "Dipak",
    last_name: "Shrestha",
    passport_no: "PA7890123",
    applied_country: "Malaysia",
    company_name: "Petronas",
    job_vacancy: "Electrician",
    interview_process: "Interview Completed",
  },
  {
    id: "8",
    first_name: "Kamala",
    last_name: "Tamang",
    passport_no: "PA8901234",
    applied_country: "United Arab Emirates",
    company_name: "Jumeirah Hotels",
    job_vacancy: "Housekeeping Staff",
    interview_process: "Deployment Ready",
  },
  {
    id: "9",
    first_name: "Rajesh",
    last_name: "Basnet",
    passport_no: "PA9012345",
    applied_country: "Oman",
    company_name: "Oman Air",
    job_vacancy: "Heavy Vehicle Driver",
    interview_process: "Selected",
  },
  {
    id: "10",
    first_name: "Sunita",
    last_name: "Karki",
    passport_no: "PA0123456",
    applied_country: "Qatar",
    company_name: "Hamad Medical Corporation",
    job_vacancy: "Physiotherapist",
    interview_process: "Visa Processing",
  },
];

export const CandidateColumns = (): ColumnDef<ICandidateListItem>[] => {
  const navigate = useNavigate();
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
        <span>
          {row?.original?.first_name + " " + row?.original?.last_name}
        </span>
      ),
      size: 400,
    },

    {
      header: "Phone Number",
      accessorKey: "phone",
      size: 200,
    },
    {
      header: "Address",
      accessorKey: "district",
      size: 300,
    },
    {
      header: "Passport Number",
      accessorKey: "passport_number",
      size: 300,
    },
    {
      header: "Employer Name",
      accessorKey: "employer_name",
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
