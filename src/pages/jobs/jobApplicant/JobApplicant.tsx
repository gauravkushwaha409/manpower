import React from 'react';
import Table, { CustomColumnDef } from '../../../components/Table';
import {
  DeleteIcon,
  EditIcon,
  ViewIcon,
} from '@/components/actions/TableComp.tsx';
import AddJobApplicantModal from './modal/AddJobApplicantModal';
import { IJobApplicant } from './interface/IJobApplicant';
import useCreateJobApplicant from './hooks/useCreateJobApplicant';
import useUpdateJobApplicant from './hooks/useUpdateJobApplicant';
import useJobApplicant from './hooks/useJobApplicant';
import UpdateJobApplicantModal from './modal/UpdateJobApplicantModal';
import DeleteModal from '@/components/DeleteModal';
import { jobApplicantsTableData } from './hooks/useGetJobApplicants';
import PageHeader from '@/common/PageHeader';

const JobApplicant: React.FC = () => {
  const {
    addJobApplicant,
    updateJobApplicant,
    setUpdateJobApplicant,
    deleteJobApplicant,
    setDeleteJobApplicant,
    handleOpenAddModal,
    handleCloseAddModal,
    handleDeleteJobApplicant,
    handleCloseDeleteModal,
    handleCloseUpdateModal,
  } = useJobApplicant();
  const { addJobApplicantFormik } = useCreateJobApplicant();
  const { updateJobApplicantFormik } = useUpdateJobApplicant();

  const tableHead: CustomColumnDef<IJobApplicant>[] = [
    {
      header: 'Company Name',
      accessorKey: 'company_name',
      search: true,
    },
    {
      header: 'Candidate Name',
      accessorKey: 'candidate_name',
      search: true,
    },
    {
      header: 'Country',
      accessorKey: 'country',
      search: true,
    },
    {
      header: 'Job Vacancy',
      accessorKey: 'job_vacancy',
      search: true,
    },
    {
      header: 'Status',
      accessorKey: 'status',
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
              setUpdateJobApplicant(cell.row.original.id);
            }}
          >
            <EditIcon />
          </button>
          <button
            onClick={() => {
              setDeleteJobApplicant(cell.row.original.id);
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
          <PageHeader
            title="Job Applicants"
            handleAddClick={handleOpenAddModal}
            routePath="/"
          />
        </div>

        {/* Table */}
        <div className="overflow-auto">
          <Table columns={tableHead} data={jobApplicantsTableData} />
        </div>
        <AddJobApplicantModal
          formik={addJobApplicantFormik}
          handleCloseModal={handleCloseAddModal}
          isOpen={addJobApplicant}
        />
        <UpdateJobApplicantModal
          formik={updateJobApplicantFormik}
          handleCloseModal={handleCloseUpdateModal}
          isOpen={!!updateJobApplicant}
        />
        <DeleteModal
          isOpen={!!deleteJobApplicant}
          onCancel={handleCloseDeleteModal}
          onConfirm={handleDeleteJobApplicant}
        />
      </div>
    </div>
  );
};

export default JobApplicant;
