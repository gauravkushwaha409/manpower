import PageHeader from "@/common/PageHeader";
import SearchFilter from "@/components/search-filter";
import { useAddModal } from "@/hooks/use-add-modal";
import React from "react";

const ChartOfAccountHeader = () => {
  const addModal = useAddModal();
  return (
    <React.Fragment>
      <PageHeader title="Chart Of Account" />
      <SearchFilter dateFilter handleAddClick={addModal.handleOpenModal} />
    </React.Fragment>
  );
};

export default ChartOfAccountHeader;
