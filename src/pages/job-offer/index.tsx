import { endpoints } from "@/api/endpoints";
import PageHeader from "@/common/PageHeader";
import SearchFilter from "@/components/search-filter";
import { apiTags } from "@/constant/tag";
import { useUpdateModal } from "@/hooks/use-update-modal";
import { useDelete } from "@/hooks/useDelete";
import JobOfferTable from "./partials/job-offer-list";
import ModalWrapper from "@/components/shadcn/modal-wrapper";
import UpdateJobOffer from "./partials/update-job-offer";
import DeleteModal from "@/components/DeleteModal";
import useJobOfferToMedicalModal from "./hooks/use-job-offer-to-medical-modal";
import JobOfferToMedical from "./partials/job-offer-to-medical";

const JobOffer = () => {
  const updateModal = useUpdateModal();
  const { handleOpenJobOfferToMedical } = useJobOfferToMedicalModal();
  const deleteInterview = useDelete({
    endpoints: endpoints.jobOffer.delete,
    invalidates: [apiTags.jobOffer.list],
  });
  return (
    <div className="u-flex-parent">
      <PageHeader title="Job Offer" />
      <SearchFilter
        dateFilter
        selectFilter={[]}
        moveToModule={{
          moduleName: "Medical",
          handleClick: handleOpenJobOfferToMedical,
        }}
      />
      <JobOfferTable />

      {/* Move job offer to medical */}
      <JobOfferToMedical />

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
