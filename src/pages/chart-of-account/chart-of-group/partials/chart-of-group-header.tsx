import PageHeader from "@/common/PageHeader";
import SearchFilter from "@/components/search-filter";
import { useAddModal } from "@/hooks/add-modal";
import React from "react";

const ChartOfGroupHeader = () => {
  const addModal = useAddModal();
  return (
    <React.Fragment>
      <PageHeader title="Chart Of Group" />
      <SearchFilter dateFilter handleAddClick={addModal.handleOpenModal} />
    </React.Fragment>
  );
};

export default ChartOfGroupHeader;
