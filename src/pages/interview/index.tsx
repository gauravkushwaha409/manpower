import PageHeader from "@/common/PageHeader";
import SearchFilter from "@/components/search-filter";
import InterviewTable from "./partials/interview-table";
import ModalWrapper from "@/components/shadcn/modal-wrapper";
import { useAddModal } from "@/hooks/add-modal";
import { useUpdateModal } from "@/hooks/update-modal";
import { useDelete } from "@/hooks/useDelete";
import { endpoints } from "@/api/endpoints";
import { apiTags } from "@/constant/tag";
import DeleteModal from "@/components/DeleteModal";
import CreateInterview from "./partials/create-interview";
import UpdateInterview from "./partials/update-interview";

const Interview = () => {
  const addModal = useAddModal();
  const updateModal = useUpdateModal();
  const deleteInterview = useDelete({
    endpoints: endpoints.interview.delete,
    invalidates: [apiTags.interview.list],
  });
  return (
    <div className="u-flex-parent">
      <PageHeader title="Interview" />
      <SearchFilter
        dateFilter
        handleAddClick={addModal.handleOpenModal}
        selectFilter={[]}
      />
      <InterviewTable />

      {/* Create Country */}
      <ModalWrapper
        className="xl:max-w-xl"
        isOpen={addModal.isOpen}
        name="Create Interview"
        onOpenChange={addModal.handleCloseModal}
      >
        <CreateInterview />
      </ModalWrapper>

      {/* Update Country */}
      <ModalWrapper
        className="xl:max-w-xl"
        isOpen={updateModal.isOpen}
        name="Update Interview"
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
