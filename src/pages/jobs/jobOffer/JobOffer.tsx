import React from "react";
import Table, { CustomColumnDef } from "../../../components/Table";
import UserHeader from "@/common/userHeader";
import {
  DeleteIcon,
  EditIcon,
  ViewIcon,
} from "@/components/actions/TableComp.tsx";
import { IJobOffer } from "./interface/IJobOffer";
import useJobOffer from "./hooks/useJobOffer";
import useCreateJobOffer from "./hooks/useCreateJobOffer";
import useUpdateJobOffer from "./hooks/useUpdateJobOffer";
import AddJobOfferModal from "./modal/AddJobOfferModal";
import UpdateJobOfferModal from "./modal/UpdateJobOfferModal";
import DeleteModal from "@/components/DeleteModal";
import { jobOfferTableData } from "./hooks/useGetJobOffer";

const JobOffer: React.FC = () => {
  const {
    addJobOffer,
    updateJobOffer,
    setUpdateJobOffer,
    deleteJobOffer,
    setDeleteJobOffer,
    handleOpenAddModal,
    handleCloseAddModal,
    handleDeleteJobOffer,
    handleCloseDeleteModal,
    handleCloseUpdateModal,
  } = useJobOffer();
  const { addJobOfferFormik } = useCreateJobOffer();
  const { updateJobOfferFormik } = useUpdateJobOffer();

  const tableHead: CustomColumnDef<IJobOffer>[] = [
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
      header: "Offer Date",
      accessorKey: "offer_date",
      search: false,
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
      cell: ({ row }) => (
        <div className="flex items-center gap-4 ml-5">
          <ViewIcon id={row.original.id} />
          <button
            onClick={() => {
              setUpdateJobOffer(row.original.id);
            }}
          >
            <EditIcon />
          </button>
          <button
            onClick={() => {
              setDeleteJobOffer(row.original.id);
            }}
          >
            <DeleteIcon />
          </button>
        </div>
      ),
    },
  ];

  return (
    <div className="min-h-full w-full bg-surface rounded-lg">
      <div className="px-6 relative">
        <div className="w-full h-fit">
          <UserHeader
            number={100}
            title="Job Offers"
            handleAddClick={handleOpenAddModal}
          />
        </div>

        <div className="overflow-auto">
          <Table columns={tableHead} data={jobOfferTableData} />
        </div>

        <AddJobOfferModal
          formik={addJobOfferFormik}
          handleCloseModal={handleCloseAddModal}
          isOpen={addJobOffer}
        />
        <UpdateJobOfferModal
          formik={updateJobOfferFormik}
          handleCloseModal={handleCloseUpdateModal}
          isOpen={!!updateJobOffer}
        />
        <DeleteModal
          isOpen={!!deleteJobOffer}
          onCancel={handleCloseDeleteModal}
          onConfirm={handleDeleteJobOffer}
        />
      </div>
    </div>
  );
};

export default JobOffer;
