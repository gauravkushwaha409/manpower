import { endpoints } from "@/api/endpoints";
import PageHeader from "@/common/PageHeader";
import SearchFilter from "@/components/search-filter";
import { apiTags } from "@/constant/tag";
import { useAddModal } from "@/hooks/add-modal";
import { useUpdateModal } from "@/hooks/update-modal";
import { useDelete } from "@/hooks/useDelete";
import JobOfferTable from "./partials/job-offer-list";
import ModalWrapper from "@/components/shadcn/modal-wrapper";
import CreateJobOffer from "./partials/create-job-offer";
import UpdateJobOffer from "./partials/update-job-offer";
import DeleteModal from "@/components/DeleteModal";

const JobOffer = () => {
  const addModal = useAddModal();
  const updateModal = useUpdateModal();
  const deleteInterview = useDelete({
    endpoints: endpoints.jobOffer.delete,
    invalidates: [apiTags.jobOffer.list],
  });
  return (
    <div className="u-flex-parent">
      <PageHeader title="Job Offer" />
      <SearchFilter
        dateFilter
        handleAddClick={addModal.handleOpenModal}
        selectFilter={[]}
      />
      <JobOfferTable />

      {/* Create Job Offer */}
      <ModalWrapper
        className="xl:max-w-xl"
        isOpen={addModal.isOpen}
        name="Create Job Offer"
        onOpenChange={addModal.handleCloseModal}
      >
        <CreateJobOffer />
      </ModalWrapper>

      {/* Update Job Offer */}
      <ModalWrapper
        className="xl:max-w-xl"
        isOpen={updateModal.isOpen}
        name="Update Job Offer"
        onOpenChange={updateModal.handleCloseModal}
      >
        <UpdateJobOffer />
      </ModalWrapper>

      {/* Delete Modal */}
      <DeleteModal
        isOpen={deleteInterview.isOpen}
        onCancel={deleteInterview.handleCancel}
        onConfirm={deleteInterview.handleDelete}
      />
    </div>
  );
};

export default JobOffer;
