import { CustomColumnDef } from '@/components/Table';
import { IJobOffer } from '../interface/IJobOffer';
import JobOfferActions from './JobOfferActions';

export const JobOfferColumns: CustomColumnDef<IJobOffer>[] = [
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

    cell: ({ row }) => <JobOfferActions row={row?.original} />,
  },
];
