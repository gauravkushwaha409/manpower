import { endpoints } from "@/api/endpoints";
import PageHeader from "@/common/PageHeader";
import DeleteModal from "@/components/DeleteModal";
import SearchFilter from "@/components/search-filter";
import ModalWrapper from "@/components/shadcn/modal-wrapper";
import { apiTags } from "@/constant/tag";
import { useAddModal } from "@/hooks/add-modal";
import { useUpdateModal } from "@/hooks/update-modal";
import { useDelete } from "@/hooks/useDelete";
import OrientationTable from "./partials/orientation-list";
import CreateOrientation from "./partials/create-orientation";
import UpdateOrientation from "./partials/update-orientation";

const Orientation = () => {
  const addModal = useAddModal();
  const updateModal = useUpdateModal();
  const deleteInterview = useDelete({
    endpoints: endpoints.orientation.delete,
    invalidates: [apiTags.orientation.list],
  });
  return (
    <div className="u-flex-parent">
      <PageHeader title="Orientation" />
      <SearchFilter
        dateFilter
        handleAddClick={addModal.handleOpenModal}
        selectFilter={[]}
      />
      <OrientationTable />

      {/* Create Medical */}
      <ModalWrapper
        className="xl:max-w-xl"
        isOpen={addModal.isOpen}
        name="Create Orientation"
        onOpenChange={addModal.handleCloseModal}
      >
        <CreateOrientation />
      </ModalWrapper>

      {/* Update Medical */}
      <ModalWrapper
        className="xl:max-w-xl"
        isOpen={updateModal.isOpen}
        name="Update Orientation"
        onOpenChange={updateModal.handleCloseModal}
      >
        <UpdateOrientation />
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

export default Orientation;
