import PageHeader from "@/common/PageHeader";
import SearchFilter from "@/components/search-filter";
import InterviewTable from "./partials/interview-table";
import ModalWrapper from "@/components/shadcn/modal-wrapper";
import { useUpdateModal } from "@/hooks/update-modal";
import { useDelete } from "@/hooks/useDelete";
import { endpoints } from "@/api/endpoints";
import { apiTags } from "@/constant/tag";
import DeleteModal from "@/components/DeleteModal";
import UpdateInterview from "./partials/update-interview";
import UpdateInterviewResult from "./partials/update-interview-result";
import { useInterviewResultModal } from "./hooks/use-update-interview-result";
import {
  interviewModeOption,
  interviewResultOption,
} from "./partials/interview-form";
import MoveToJobOffer from "./partials/move-to-job-offer";
import useMoveToJobOfferModal from "./hooks/use-move-to-job-offer-modal";

const Interview = () => {
  const updateModal = useUpdateModal();
  const { handleStatusClose, isOpen: isInterviewResultOpen } =
    useInterviewResultModal();
  const deleteInterview = useDelete({
    endpoints: endpoints.interview.delete,
    invalidates: [apiTags.interview.list],
  });

  const { handleOpenMoveToJobOffer } = useMoveToJobOfferModal();
  return (
    <div className="u-flex-parent">
      <PageHeader title="Interview" />
      <SearchFilter
        dateFilter
        selectFilter={[
          {
            placeholder: "select job",
            option: [
              { label: "Frontend Developer", value: "frontend_developer" },
              { label: "Backend Developer", value: "backend_developer" },
            ],
            paramsKey: "job-filter",
          },
          {
            placeholder: "select mode",
            option: interviewModeOption,
            paramsKey: "interview-filter",
          },
          {
            placeholder: "select result",
            option: interviewResultOption,
            paramsKey: "result-filter",
          },
        ]}
        moveToModule={{
          moduleName: "job offer",
          handleClick: handleOpenMoveToJobOffer,
        }}
      />
      <InterviewTable />

      {/* Move to job offer */}
      <MoveToJobOffer />

      {/* Update Interview Result */}
      <ModalWrapper
        className="xl:max-w-xl"
        isOpen={isInterviewResultOpen}
        name="Update Interview Result"
        onOpenChange={handleStatusClose}
      >
        <UpdateInterviewResult />
      </ModalWrapper>

      {/* Update Interview */}
      <ModalWrapper
        className="xl:max-w-xl"
        isOpen={updateModal.isOpen}
        name="Update Interview Result"
        onOpenChange={updateModal.handleCloseModal}
      >
        <UpdateInterview />
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

export default Interview;
