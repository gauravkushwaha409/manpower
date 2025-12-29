import { ColumnDef } from "@tanstack/react-table";
import { IJobListItemByCandidate } from "../hooks/use-job-by-candidate";

export const jobByCandidateData: IJobListItemByCandidate[] = [
  {
    id: "1",
    industry: "Information Technology",
    category: "Software Development",
    sub_category: "Frontend Development",
    job_title: "React Developer",
    employer_name: "TechNova Solutions",
  },
  {
    id: "2",
    industry: "Information Technology",
    category: "Software Development",
    sub_category: "Backend Development",
    job_title: "NestJS Backend Engineer",
    employer_name: "CloudAxis Pvt Ltd",
  },
  {
    id: "3",
    industry: "Information Technology",
    category: "Quality Assurance",
    sub_category: "Automation Testing",
    job_title: "QA Automation Engineer",
    employer_name: "NextGen Software",
  },
  {
    id: "4",
    industry: "Healthcare",
    category: "Medical Services",
    sub_category: "Nursing",
    job_title: "Registered Nurse",
    employer_name: "City Care Hospital",
  },
  {
    id: "5",
    industry: "Construction",
    category: "Civil Engineering",
    sub_category: "Site Supervision",
    job_title: "Site Engineer",
    employer_name: "BuildRight Constructions",
  },
  {
    id: "6",
    industry: "Hospitality",
    category: "Hotel Operations",
    sub_category: "Food & Beverage",
    job_title: "Restaurant Supervisor",
    employer_name: "Royal Palace Hotel",
  },
  {
    id: "7",
    industry: "Manufacturing",
    category: "Production",
    sub_category: "Machine Operations",
    job_title: "CNC Machine Operator",
    employer_name: "Precision Metals Ltd",
  },
  {
    id: "8",
    industry: "Logistics",
    category: "Transportation",
    sub_category: "Fleet Management",
    job_title: "Logistics Coordinator",
    employer_name: "FastTrack Logistics",
  },
];

export const JobByCandidateColumn =
  (): ColumnDef<IJobListItemByCandidate>[] => {
    return [
      {
        header: "SN",
        accessorKey: "sn",
        cell: ({ row }) => row.index + 1,
        size: 100,
      },
      {
        header: "Job Title",
        accessorKey: "job_title",
        size: 200,
      },
      {
        header: "Industry",
        accessorKey: "industry",
        size: 200,
      },
      {
        header: "Category",
        accessorKey: "category",
        size: 300,
      },
      {
        header: "Sub Category",
        accessorKey: "sub_category",
        size: 300,
      },
      {
        header: "Employer Name",
        accessorKey: "employer_name",
        size: 200,
      },
    ];
  };
