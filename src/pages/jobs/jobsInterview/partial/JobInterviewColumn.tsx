import { CustomColumnDef } from '@/components/Table';
import JobInterviewActions from './JobInterviewActions';
import { IJobInterview } from '../interface/IJobInterview';

export const JobInterviewColumns: CustomColumnDef<IJobInterview>[] = [
  {
    header: 'Company Name',
    accessorKey: 'company_name',
  },
  {
    header: 'Candidate Name',
    accessorKey: 'candidate_name',
  },
  {
    header: 'Job Vacancy',
    accessorKey: 'job_vacancy',
  },
  {
    header: 'Status',
    accessorKey: 'status',
  },
  {
    header: 'Action',
    accessorKey: 'action',

    cell: ({ row }) => <JobInterviewActions row={row?.original} />,
  },
];
