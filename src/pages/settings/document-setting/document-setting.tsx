import PageHeader from "@/common/PageHeader";
import SearchFilter from "@/components/search-filter";
import { useAddModal } from "@/hooks/use-add-modal";
import { useUpdateModal } from "@/hooks/use-update-modal";
import DocumentTable from "./partials/document-table";
import ModalWrapper from "@/components/shadcn/modal-wrapper";
import CreateDocument from "./partials/create-document";
import UpdateDocument from "./partials/update-document";
import DeleteModal from "@/components/DeleteModal";
import { useDelete } from "@/hooks/useDelete";
import { endpoints } from "@/api/endpoints";
import { apiTags } from "@/constant/tag";

const DocumentSetting = () => {
  const addModal = useAddModal();
  const updateModal = useUpdateModal();
  const deleteDocument = useDelete({
    endpoints: endpoints.document.delete,
    invalidates: [apiTags.document.list],
  });
  return (
    <div className="u-flex-parent">
      <PageHeader title="Document Setting" />
      <SearchFilter
        dateFilter
        handleAddClick={addModal.handleOpenModal}
        selectFilter={[
          {
            placeholder: "Select Country",
            option: [{ label: "Nepal", value: "nepal" }],
            paramsKey: "country",
          },
        ]}
      />
      <DocumentTable />

      {/* Create Industry Modal */}
      <ModalWrapper
        className="xl:max-w-xl"
        isOpen={addModal.isOpen}
        name="Create Document"
        onOpenChange={addModal.handleCloseModal}
      >
        <CreateDocument />
      </ModalWrapper>

      {/* Update Industry Modal */}
      <ModalWrapper
        className="xl:max-w-xl"
        isOpen={updateModal.isOpen}
        name="Update Document"
        onOpenChange={updateModal.handleCloseModal}
      >
        <UpdateDocument />
      </ModalWrapper>

      {/* Delete Modal */}
      <DeleteModal
        isOpen={deleteDocument.isOpen}
        onCancel={deleteDocument.handleCancel}
        onConfirm={deleteDocument.handleDelete}
      />
    </div>
  );
};
export default DocumentSetting;
