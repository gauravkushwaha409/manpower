import { CustomColumnDef } from '@/components/Table';
import { IJobApplication } from '../interface/IJobApplication';
import JobApplicationActions from './JobApplicationActions';

export const JobApplicationColumns: CustomColumnDef<IJobApplication>[] = [
  {
    header: 'Title',
    accessorKey: 'title',
  },
  {
    header: 'Description',
    accessorKey: 'description',
  },
  {
    header: 'Action',
    accessorKey: 'action',

    cell: ({ row }) => <JobApplicationActions row={row?.original} />,
  },
];
