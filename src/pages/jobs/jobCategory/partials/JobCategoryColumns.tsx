import { CustomColumnDef } from '@/components/Table';
import JobCategoryActions from './JobCategoryActions';
import { IJobCategory } from '../interface/IJobCategory';

export const JobCategoryColumns: CustomColumnDef<IJobCategory>[] = [
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

    cell: ({ row }) => <JobCategoryActions row={row?.original} />,
  },
];
