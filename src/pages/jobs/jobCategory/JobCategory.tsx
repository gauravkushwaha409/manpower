import React from 'react';
import Table, { CustomColumnDef } from '../../../components/Table';
import UserHeader from '@/common/userHeader';
import {
  DeleteIcon,
  EditIcon,
  ViewIcon,
} from '@/components/actions/TableComp.tsx';
import DeleteModal from '@/components/DeleteModal';
import AddJobCategoryModal from '@/pages/jobs/jobCategory/modal/AddJobCategoriesModal.tsx';
import UpdateJobCategoriesModal from '@/pages/jobs/jobCategory/modal/UpdateJobCategoriesModal.tsx';
import useJobCategory from '@/pages/jobs/jobCategory/hooks/useJobCategory.ts';
import useCreateJobCategory from '@/pages/jobs/jobCategory/hooks/useCreateJobCategory.ts';
import useUpdateJobCategory from '@/pages/jobs/jobCategory/hooks/useUpdateJobCategory.ts';
import { jobCategoriesTableData } from './hooks/useGetJobCategories';

type JobCategory = {
  id: string;
  title: string;
  description: string;
};

const JobCategory: React.FC = () => {
  const {
    addJobCategory,
    updateJobCategory,
    setUpdateJobCategory,
    deleteJobCategory,
    setDeleteJobCategory,
    handleOpenAddModal,
    handleCloseAddModal,
    handleDeleteJobCategory,
    handleCloseDeleteModal,
    handleCloseUpdateModal,
  } = useJobCategory();
  const { addJobCategoriesFormik } = useCreateJobCategory();
  const { updateJobCategoryFormik } = useUpdateJobCategory();

  const tableHead: CustomColumnDef<JobCategory>[] = [
    {
      header: 'Title',
      accessorKey: 'title',
      search: true,
    },
    {
      header: 'Description',
      accessorKey: 'description',
      search: true,
    },
    {
      header: 'Action',
      accessorKey: 'action',
      search: false,
      cell: (cell) => (
        <div className="flex items-center gap-4 ml-5">
          <ViewIcon id={cell.row.original.id} />
          <button
            onClick={() => {
              setUpdateJobCategory(cell.row.original.id);
            }}
          >
            <EditIcon />
          </button>

          <button
            onClick={() => {
              setDeleteJobCategory(cell.row.original.id);
            }}
          >
            <DeleteIcon />
          </button>
        </div>
      ),
    },
  ];

  return (
    <div className="bg-surface rounded-lg w-full min-h-full">
      <div className="relative px-6">
        {/* Header */}
        <div className="w-full h-fit">
          <UserHeader
            title="Job Categories"
            handleAddClick={handleOpenAddModal}
            routePath="/"
          />
        </div>

        {/* Table */}
        <div className="overflow-auto">
          <Table columns={tableHead} data={jobCategoriesTableData} />
        </div>

        <AddJobCategoryModal
          formik={addJobCategoriesFormik}
          handleCloseModal={handleCloseAddModal}
          isOpen={addJobCategory}
        />
        <UpdateJobCategoriesModal
          formik={updateJobCategoryFormik}
          handleCloseModal={handleCloseUpdateModal}
          isOpen={!!updateJobCategory}
        />
        <DeleteModal
          isOpen={!!deleteJobCategory}
          onCancel={handleCloseDeleteModal}
          onConfirm={handleDeleteJobCategory}
        />
      </div>
    </div>
  );
};

export default JobCategory;
