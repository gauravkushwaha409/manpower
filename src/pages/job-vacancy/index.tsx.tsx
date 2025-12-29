import { endpoints } from "@/api/endpoints";
import PageHeader from "@/common/PageHeader";
import SearchFilter from "@/components/search-filter";
import { PATH } from "@/constant/path";
import { apiTags } from "@/constant/tag";
import { useDelete } from "@/hooks/useDelete";
import { useNavigate } from "react-router-dom";
import JobVacancyTable from "./partials/job-vacancy-table";
import DeleteModal from "@/components/DeleteModal";
import { useCandidateByJobModal } from "./hooks/use-candidate-by-job";
import ModalWrapper from "@/components/shadcn/modal-wrapper";
import CandidateByJobTable from "./partials/candidate-by-job";

const JobVacancy = () => {
  const navigate = useNavigate();
  const { handleCloseCandidateByJob, isCandidateByJobOpen } =
    useCandidateByJobModal();
  const deleteModal = useDelete({
    endpoints: endpoints.jobVacancy.delete,
    invalidates: [apiTags.jobVacancy.list],
  });
  return (
    <div className="u-flex-parent">
      <PageHeader title="Job Vacancy" />
      <SearchFilter
        dateFilter={true}
        handleAddClick={() => {
          navigate(PATH.preApprovalDofe.create);
        }}
        selectFilter={[
          {
            placeholder: "Select Comapny",
            option: [{ label: "Dome Infosys", value: "dome-infosys" }],
            paramsKey: "company",
          },
        ]}
      />
      <JobVacancyTable />

      <ModalWrapper
        name="Candidate List"
        description="Candidate List Based on Job"
        childrenWrapperClassName="overflow-x-hidden py-1"
        isOpen={isCandidateByJobOpen}
        onOpenChange={handleCloseCandidateByJob}
        className=""
      >
        <CandidateByJobTable />
      </ModalWrapper>

      {/* Delete Modal */}
      <DeleteModal
        isOpen={deleteModal.isOpen}
        onCancel={deleteModal.handleCancel}
        onConfirm={deleteModal.handleDelete}
      />
    </div>
  );
};

export default JobVacancy;
