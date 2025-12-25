import React from "react";
import PageHeader from "@/common/PageHeader";
import SearchFilter from "@/components/search-filter";
import { useAddModal } from "@/hooks/add-modal";
import { useUpdateModal } from "@/hooks/update-modal";
import ModalWrapper from "@/components/shadcn/modal-wrapper";
import CreateIndustry from "./partials/create-industry";
import UpdateIndustry from "./partials/update-industry";
import IndustryTable from "./partials/industry-table";

const Industry: React.FC = () => {
  const addModal = useAddModal();
  const updateModal = useUpdateModal();

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
    </div>
  );
};

export default Industry;
