import TableAction from "@/components/TableAction";
import { ColumnDef } from "@tanstack/react-table";
import { Checkbox } from "@/components/ui/checkbox";
import { useNavigate } from "react-router-dom";
import { PATH } from "@/constant/path";
import React from "react";
import { useDelete } from "@/hooks/useDelete";
import { IJobVacancyListItem } from "../hooks/use-job-vacancy-list";
import { useCandidateByJobModal } from "../hooks/use-candidate-by-job";

export const jobVacancyData: IJobVacancyListItem[] = [
  {
    id: "1",
    job_title: "Civil Engineer",
    male: "5",
    female: "2",
    basic_salary_nrp: "150000",
    basic_salary_aed: "4500",
    working_hours: "8",
    working_days: "6",
    contract_period: "2 Years",
    working_city: "Dubai",
    experience_required: true,
    experience_years: "3",
    academic_qualification: "Bachelor's in Civil Engineering",
  },
  {
    id: "2",
    job_title: "Registered Nurse",
    male: "3",
    female: "10",
    basic_salary_nrp: "120000",
    basic_salary_aed: "3600",
    working_hours: "8",
    working_days: "5",
    contract_period: "3 Years",
    working_city: "Abu Dhabi",
    experience_required: true,
    experience_years: "2",
    academic_qualification: "Bachelor's in Nursing",
  },
  {
    id: "3",
    job_title: "Security Guard",
    male: "20",
    female: "0",
    basic_salary_nrp: "60000",
    basic_salary_aed: "1800",
    working_hours: "10",
    working_days: "6",
    contract_period: "2 Years",
    working_city: "Sharjah",
    experience_required: false,
    experience_years: "0",
    academic_qualification: "High School",
  },
  {
    id: "4",
    job_title: "Software Developer",
    male: "8",
    female: "5",
    basic_salary_nrp: "200000",
    basic_salary_aed: "6000",
    working_hours: "8",
    working_days: "5",
    contract_period: "2 Years",
    working_city: "Dubai",
    experience_required: true,
    experience_years: "4",
    academic_qualification: "Bachelor's in Computer Science",
  },
  {
    id: "5",
    job_title: "Hotel Receptionist",
    male: "2",
    female: "6",
    basic_salary_nrp: "80000",
    basic_salary_aed: "2400",
    working_hours: "8",
    working_days: "6",
    contract_period: "2 Years",
    working_city: "Dubai",
    experience_required: true,
    experience_years: "1",
    academic_qualification: "Diploma in Hospitality",
  },
  {
    id: "6",
    job_title: "Electrician",
    male: "15",
    female: "0",
    basic_salary_nrp: "75000",
    basic_salary_aed: "2250",
    working_hours: "9",
    working_days: "6",
    contract_period: "2 Years",
    working_city: "Ajman",
    experience_required: true,
    experience_years: "2",
    academic_qualification: "ITI Certificate",
  },
  {
    id: "7",
    job_title: "Accountant",
    male: "3",
    female: "4",
    basic_salary_nrp: "130000",
    basic_salary_aed: "3900",
    working_hours: "8",
    working_days: "5",
    contract_period: "2 Years",
    working_city: "Abu Dhabi",
    experience_required: true,
    experience_years: "3",
    academic_qualification: "Bachelor's in Accounting",
  },
  {
    id: "8",
    job_title: "Housekeeping Staff",
    male: "5",
    female: "15",
    basic_salary_nrp: "55000",
    basic_salary_aed: "1650",
    working_hours: "8",
    working_days: "6",
    contract_period: "2 Years",
    working_city: "Dubai",
    experience_required: false,
    experience_years: "0",
    academic_qualification: "High School",
  },
  {
    id: "9",
    job_title: "Mechanical Engineer",
    male: "6",
    female: "1",
    basic_salary_nrp: "160000",
    basic_salary_aed: "4800",
    working_hours: "8",
    working_days: "6",
    contract_period: "3 Years",
    working_city: "Ras Al Khaimah",
    experience_required: true,
    experience_years: "4",
    academic_qualification: "Bachelor's in Mechanical Engineering",
  },
  {
    id: "10",
    job_title: "Chef / Cook",
    male: "8",
    female: "4",
    basic_salary_nrp: "90000",
    basic_salary_aed: "2700",
    working_hours: "9",
    working_days: "6",
    contract_period: "2 Years",
    working_city: "Dubai",
    experience_required: true,
    experience_years: "2",
    academic_qualification: "Culinary Diploma",
  },
  {
    id: "11",
    job_title: "Sales Executive",
    male: "4",
    female: "6",
    basic_salary_nrp: "100000",
    basic_salary_aed: "3000",
    working_hours: "8",
    working_days: "6",
    contract_period: "2 Years",
    working_city: "Sharjah",
    experience_required: true,
    experience_years: "1",
    academic_qualification: "Bachelor's Degree",
  },
  {
    id: "12",
    job_title: "Warehouse Helper",
    male: "25",
    female: "0",
    basic_salary_nrp: "50000",
    basic_salary_aed: "1500",
    working_hours: "10",
    working_days: "6",
    contract_period: "2 Years",
    working_city: "Fujairah",
    experience_required: false,
    experience_years: "0",
    academic_qualification: "High School",
  },
  {
    id: "13",
    job_title: "Graphic Designer",
    male: "2",
    female: "4",
    basic_salary_nrp: "110000",
    basic_salary_aed: "3300",
    working_hours: "8",
    working_days: "5",
    contract_period: "2 Years",
    working_city: "Dubai",
    experience_required: true,
    experience_years: "2",
    academic_qualification: "Bachelor's in Design",
  },
  {
    id: "14",
    job_title: "Heavy Vehicle Driver",
    male: "12",
    female: "0",
    basic_salary_nrp: "70000",
    basic_salary_aed: "2100",
    working_hours: "10",
    working_days: "6",
    contract_period: "2 Years",
    working_city: "Abu Dhabi",
    experience_required: true,
    experience_years: "3",
    academic_qualification: "Driving License (Heavy)",
  },
  {
    id: "15",
    job_title: "Physiotherapist",
    male: "2",
    female: "3",
    basic_salary_nrp: "140000",
    basic_salary_aed: "4200",
    working_hours: "8",
    working_days: "5",
    contract_period: "3 Years",
    working_city: "Dubai",
    experience_required: true,
    experience_years: "2",
    academic_qualification: "Bachelor's in Physiotherapy",
  },
];

const JobVacancyColumns = (): ColumnDef<IJobVacancyListItem>[] => {
  const navigate = useNavigate();
  const { handleOpenModal } = useDelete({ endpoints: "", invalidates: [""] });
  const { handleOpenCandidateByJob } = useCandidateByJobModal();
  const handleUpdateClick = (id: string) => {
    navigate(PATH.jobVacancy.update.replace(":id", id));
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
      size: 50,
    },
    {
      header: "Job Title",
      accessorKey: "job_title",
      cell: ({ row }) => (
        <button
          onClick={(e) => {
            e.preventDefault();
            handleOpenCandidateByJob(row?.original?.id);
          }}
          className="flex items-center gap-x-4 cursor-pointer"
        >
          {row?.original?.job_title}
          <span className="inline-block px-2 py-1">300+</span>
        </button>
      ),
      size: 400,
    },
    {
      header: "Company Name",
      accessorKey: "",
    },
    {
      header: "No. Of Male",
      accessorKey: "male",
      size: 150,
    },
    {
      header: "No. Of Female",
      accessorKey: "female",
      size: 150,
    },
    {
      header: "Salary (NRP)",
      accessorKey: "basic_salary_nrp",
      size: 300,
    },
    {
      header: "Salary (Foreign)",
      accessorKey: "basic_salary_aed",
      size: 300,
    },
    {
      header: "Working Hours",
      accessorKey: "working_hours",
      size: 150,
    },
    {
      header: "Working Days",
      accessorKey: "working_days",
      size: 150,
    },
    {
      header: "Contract Period (Years)",
      accessorKey: "contract_period",
      size: 200,
    },
    {
      header: "Working City",
      accessorKey: "working_city",
      size: 300,
    },
    {
      header: "Experience",
      cell: ({ row }) => (
        <span>
          {row?.original?.experience_required ? "Required" : "Not Required"}
        </span>
      ),
      size: 200,
    },
    {
      header: "Experience (Years)",
      cell: ({ row }) => <span>{row?.original?.experience_years} Years</span>,
      size: 200,
    },
    {
      header: "Academic Qualification",
      cell: ({ row }) => <span>{row?.original?.academic_qualification}</span>,
      size: 400,
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
      size: 200,
    },
  ];
};

export default JobVacancyColumns;
