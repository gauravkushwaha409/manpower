import React from "react";
import AddJobVacancyModal from "./modal/AddJobVacancyModal";
import useJobVacancy from "./hooks/useJobVacancy";
import useCreateVacancies from "./hooks/useCreateVacancies";
import useUpdateVacancies from "./hooks/useUpdateVacancies";
import UpdateJobVacancyModal from "./modal/UpdateJobVacancyModal";
import DeleteModal from "@/components/DeleteModal";
import PageHeader from "@/common/PageHeader";

const JobVacancies: React.FC = () => {
  const {
    step,
    setStep,
    handleCloseAddModal,
    handleOpenAddModal,
    handleCloseUpdateModal,
    handleCloseDeleteModal,
    addJobVacancy,
    updateJobVacancy,
    deleteJobVacancy,
    handleDeleteJobVacancy,
  } = useJobVacancy();
  const { createVacancyFormik } = useCreateVacancies({
    step,
    setStep,
    onClose: handleCloseAddModal,
  });
  const { updateCandidateFormik } = useUpdateVacancies({ setStep, step });

  return (
    <div className="bg-surface rounded-lg w-full min-h-full">
      <div className="relative px-6">
        {/* Header */}
        <div className="w-full h-fit">
          <PageHeader
            title="Job Vacancies"
            handleAddClick={handleOpenAddModal}
            routePath="#"
          />
        </div>

        {/* Table */}
        <div className="overflow-auto">
          {/* <Table columns={tableHead} data={jobVacancyTableData} /> */}
        </div>

        <AddJobVacancyModal
          formik={createVacancyFormik}
          handleCloseModal={handleCloseAddModal}
          isOpen={addJobVacancy}
          setStep={setStep}
          step={step}
        />
        <UpdateJobVacancyModal
          formik={updateCandidateFormik}
          handleCloseModal={handleCloseUpdateModal}
          isOpen={updateJobVacancy ? true : false}
          setStep={setStep}
          step={step}
        />
        <DeleteModal
          isOpen={deleteJobVacancy ? true : false}
          onCancel={handleCloseDeleteModal}
          onConfirm={handleDeleteJobVacancy}
        />
      </div>
    </div>
  );
};

export default JobVacancies;
