import { endpoints } from "@/api/endpoints";
import PageHeader from "@/common/PageHeader";
import SearchFilter from "@/components/search-filter";
import ModalWrapper from "@/components/shadcn/modal-wrapper";
import { apiTags } from "@/constant/tag";
import { useAddModal } from "@/hooks/add-modal";
import { useUpdateModal } from "@/hooks/update-modal";
import { useDelete } from "@/hooks/useDelete";
import ShramTable from "./partials/orientation-list";
import CreateShram from "./partials/create-shram";
import UpdateShram from "./partials/update-shram";
import DeleteModal from "@/components/DeleteModal";

const Sharam = () => {
  const addModal = useAddModal();
  const updateModal = useUpdateModal();
  const deleteInterview = useDelete({
    endpoints: endpoints.shram.delete,
    invalidates: [apiTags.shram.list],
  });
  return (
    <div className="u-flex-parent">
      <PageHeader title="Shram" />
      <SearchFilter
        dateFilter
        handleAddClick={addModal.handleOpenModal}
        selectFilter={[
          {
            placeholder: "Select Job Title",
            paramsKey: "job-title",
            option: [
              { label: "Frontend Developer", value: "frontend-developer" },
              { label: "Backend Developer", value: "backend-developer" },
              { label: "UI/UX Designer", value: "ui-ux designer" },
            ],
          },
        ]}
      />
      <ShramTable />

      {/* Create Medical */}
      <ModalWrapper
        className="xl:max-w-xl"
        isOpen={addModal.isOpen}
        name="Create Shram"
        onOpenChange={addModal.handleCloseModal}
      >
        <CreateShram />
      </ModalWrapper>

      {/* Update Medical */}
      <ModalWrapper
        className="xl:max-w-xl"
        isOpen={updateModal.isOpen}
        name="Update Shram"
        onOpenChange={updateModal.handleCloseModal}
      >
        <UpdateShram />
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
export default Sharam;
