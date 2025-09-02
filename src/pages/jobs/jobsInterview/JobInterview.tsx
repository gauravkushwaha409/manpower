import React from "react";
import Table, { CustomColumnDef } from "../../../components/Table";
import UserHeader from "@/common/userHeader";
import {
  DeleteIcon,
  EditIcon,
  ViewIcon,
} from "../../../components/actions/TableComp";
import { IJobInterview } from "./interface/IJobInterview";
import useJobInterview from "./hooks/useJobInterview";
import useCreateJobInterview from "./hooks/useCreateJobInterview";
import useUpdateJobInterview from "./hooks/useUpdateJobInterview";
import AddJobInterviewModal from "./modal/AddJobInterviewModal";
import UpdateJobInterviewModal from "./modal/UpdateJobInterview";
import DeleteModal from "@/components/DeleteModal";
import { jobInterviewTableData } from "./hooks/useGetJobInterview";

const JobInterview: React.FC = () => {
  const {
    addJobInterview,
    updateJobInterview,
    setUpdateJobInterview,
    deleteJobInterview,
    setDeleteJobInterview,
    handleOpenAddModal,
    handleCloseAddModal,
    handleDeleteJobInterview,
    handleCloseDeleteModal,
    handleCloseUpdateModal,
  } = useJobInterview();
  const { addJobInterviewFormik } = useCreateJobInterview();
  const { updateJobInterviewFormik } = useUpdateJobInterview();

  const tableHead: CustomColumnDef<IJobInterview>[] = [
    {
      header: "Company Name",
      accessorKey: "company_name",
      search: true,
    },
    {
      header: "Candidate Name",
      accessorKey: "candidate_name",
      search: true,
    },
    {
      header: "Job Vacancy",
      accessorKey: "job_vacancy",
      search: true,
    },
    {
      header: "Interview Date & Time",
      accessorKey: "interview_date_time",
      search: true,
    },
    {
      header: "Salary Offered",
      accessorKey: "salary_offered",
      search: false,
    },
    {
      header: "Status",
      accessorKey: "status",
      search: false,
    },
    {
      header: "Action",
      accessorKey: "action",
      search: false,
      cell: (cell) => (
        <div className="flex items-center gap-4 ml-5">
          <ViewIcon id={cell.row.original.id} />
          <button
            onClick={() => {
              setUpdateJobInterview(cell.row.original.id);
            }}
          >
            <EditIcon />
          </button>
          <button
            onClick={() => {
              setDeleteJobInterview(cell.row.original.id);
            }}
          >
            <DeleteIcon />
          </button>
        </div>
      ),
    },
  ];

  return (
    <div className="min-h-screen w-full bg-surface rounded-lg">
      <div className="px-6 relative">
        {/* Header */}
        <div className="w-full h-fit">
          <UserHeader
            handleAddClick={handleOpenAddModal}
            number={100}
            title="Interview Candidates"
          />
        </div>

        {/* Table */}
        <div className="overflow-auto min-h-screen">
          <Table columns={tableHead} data={jobInterviewTableData} />
        </div>

        <AddJobInterviewModal
          formik={addJobInterviewFormik}
          handleCloseModal={handleCloseAddModal}
          isOpen={addJobInterview}
        />
        <UpdateJobInterviewModal
          formik={updateJobInterviewFormik}
          handleCloseModal={handleCloseUpdateModal}
          isOpen={updateJobInterview ? true : false}
        />
        <DeleteModal
          isOpen={deleteJobInterview ? true : false}
          onCancel={handleCloseDeleteModal}
          onConfirm={handleDeleteJobInterview}
        />
      </div>
    </div>
  );
};

export default JobInterview;
