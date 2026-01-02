import React from "react";
import PageHeader from "@/common/PageHeader";
import SearchFilter from "@/components/search-filter";
import { useAddModal } from "@/hooks/use-add-modal";
import { useUpdateModal } from "@/hooks/use-update-modal";
import ModalWrapper from "@/components/shadcn/modal-wrapper";
import CreateIndustry from "./partials/create-industry";
import UpdateIndustry from "./partials/update-industry";
import IndustryTable from "./partials/industry-table";
import { useDelete } from "@/hooks/useDelete";
import { endpoints } from "@/api/endpoints";
import { apiTags } from "@/constant/tag";
import DeleteModal from "@/components/DeleteModal";

const Industry: React.FC = () => {
  const addModal = useAddModal();
  const updateModal = useUpdateModal();
  const deleteModal = useDelete({
    endpoints: endpoints.industry.delete,
    invalidates: [apiTags.industry.list],
  });
  return (
    <div className="u-flex-parent">
      <PageHeader title="Industry" />
      <SearchFilter
        dateFilter
        handleAddClick={addModal.handleOpenModal}
        selectFilter={[
          {
            placeholder: "Select Comapny",
            option: [{ label: "Dome Infosys", value: "dome-infosys" }],
            paramsKey: "company",
          },
        ]}
      />
      <IndustryTable />

      {/* Create Industry Modal */}
      <ModalWrapper
        className="xl:max-w-xl"
        isOpen={addModal.isOpen}
        name="Create Industry"
        onOpenChange={addModal.handleCloseModal}
      >
        <CreateIndustry />
      </ModalWrapper>

      {/* Update Industry Modal */}
      <ModalWrapper
        className="xl:max-w-xl"
        isOpen={updateModal.isOpen}
        name="Update Industry"
        onOpenChange={updateModal.handleCloseModal}
      >
        <UpdateIndustry />
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

export default Industry;
