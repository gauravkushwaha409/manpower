import React from 'react';
import UserHeader from '../../../common/UserHeader';
import AddJobVacancyModal from './modal/AddJobVacancyModal';
import useJobVacancy from './hooks/useJobVacancy';
import useCreateVacancies from './hooks/useCreateVacancies';
import useUpdateVacancies from './hooks/useUpdateVacancies';
import UpdateJobVacancyModal from './modal/UpdateJobVacancyModal';
import DeleteModal from '@/components/DeleteModal';
// import { CustomColumnDef } from '@/components/Table';
// import { IJobVacancyTableData } from './interface/IAddJobVacancies';

const JobVacancies: React.FC = () => {
   const { step, setStep, handleCloseAddModal, handleOpenAddModal, handleCloseUpdateModal, handleCloseDeleteModal, addJobVacancy, updateJobVacancy, deleteJobVacancy, handleDeleteJobVacancy } = useJobVacancy()
   const { createVacancyFormik } = useCreateVacancies({ step, setStep, onClose: handleCloseAddModal })
   const { updateCandidateFormik } = useUpdateVacancies({ setStep, step })


   // const tableHead: CustomColumnDef<Pick<IJobVacancyTableData, "recruitment_company" | "">> = [
   //    {
   //       header: "Company Name",
   //       accessorKey: "recruitment_company",
   //       search: true,
   //    },
   //    {
   //       header: "Job Title",
   //       accessorKey: "job_title",
   //       search: true,
   //    },
   //    {
   //       header: "Country",
   //       accessorKey: "country",
   //       search: true,
   //    },
   //    {
   //       header: "No. Of Vacancies",
   //       accessorKey: "no_of_vacancies",
   //       search: false,
   //    },
   //    {
   //       header: "Vacancy Type",
   //       accessorKey: "vacancy_type",
   //       search: false,
   //    },
   //    {
   //       header: "Date",
   //       accessorKey: "date",
   //       search: false,
   //    },
   //    {
   //       header: "Action",
   //       accessorKey: "action",
   //       search: false,
   //       cell: (cell) => (
   //          <div className='flex items-center gap-4 ml-5'>
   //             <ViewIcon id={cell.row.original.id} />
   //             <EditIcon
   //                id={cell.row.original.id}
   //             // onClick={() => setActiveId(cell.row.original.id)}
   //             />
   //             <DeleteIcon id={cell.row.original.id} />
   //          </div>
   //       ),
   //    },
   // ];


   return (
      <div className='min-h-full w-full bg-surface rounded-lg'>
         <div className='px-6 relative'>
            {/* Header */}
            <div className='w-full h-fit'>
               <UserHeader number={100} title='Job Vacancies' handleAddClick={handleOpenAddModal} />
            </div>

            {/* Table */}
            <div className='overflow-auto'>
               {/* <Table columns={tableHead} data={jobVacancyTableData} /> */}
            </div>

            <AddJobVacancyModal formik={createVacancyFormik} handleCloseModal={handleCloseAddModal} isOpen={addJobVacancy} setStep={setStep} step={step} />
            <UpdateJobVacancyModal formik={updateCandidateFormik} handleCloseModal={handleCloseUpdateModal} isOpen={updateJobVacancy ? true : false} setStep={setStep} step={step} />
            <DeleteModal isOpen={deleteJobVacancy ? true : false} onCancel={handleCloseDeleteModal} onConfirm={handleDeleteJobVacancy} />

         </div>
      </div>
   );
};

export default JobVacancies;