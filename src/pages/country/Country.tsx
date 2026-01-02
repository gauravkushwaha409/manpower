import React from "react";
import PageHeader from "@/common/PageHeader";
import { useAddModal } from "@/hooks/use-add-modal";
import { useUpdateModal } from "@/hooks/use-update-modal";
import { useDelete } from "@/hooks/useDelete";
import { endpoints } from "@/api/endpoints";
import { apiTags } from "@/constant/tag";
import SearchFilter from "@/components/search-filter";
import CountryTable from "./partials/country-table";
import ModalWrapper from "@/components/shadcn/modal-wrapper";
import DeleteModal from "@/components/DeleteModal";
import UpdateCountry from "./partials/update-country";
import CreateCountry from "./partials/create-country";

const Country: React.FC = () => {
  const addModal = useAddModal("add-country-modal", "open");
  const updateModal = useUpdateModal();
  const deleteDocument = useDelete({
    endpoints: endpoints.document.delete,
    invalidates: [apiTags.document.list],
  });
  return (
    <div className="u-flex-parent">
      <PageHeader title="Country" />
      <SearchFilter
        dateFilter
        handleAddClick={addModal.handleOpenModal}
        selectFilter={[]}
      />
      <CountryTable />

      {/* Create Country */}
      <ModalWrapper
        className="xl:max-w-xl"
        isOpen={addModal.isOpen}
        name="Create Country"
        description="This will create the country"
        onOpenChange={addModal.handleCloseModal}
      >
        <CreateCountry />
      </ModalWrapper>

      {/* Update Country */}
      <ModalWrapper
        className="xl:max-w-xl"
        isOpen={updateModal.isOpen}
        name="Update Country"
        description="This will update the country"
        onOpenChange={updateModal.handleCloseModal}
      >
        <UpdateCountry />
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

export default Country;
