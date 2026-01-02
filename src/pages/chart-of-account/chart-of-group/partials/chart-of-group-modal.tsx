import { endpoints } from "@/api/endpoints";
import DeleteModal from "@/components/DeleteModal";
import ModalWrapper from "@/components/shadcn/modal-wrapper";
import { apiTags } from "@/constant/tag";
import { useAddModal } from "@/hooks/add-modal";
import { useUpdateModal } from "@/hooks/update-modal";
import { useDelete } from "@/hooks/useDelete";
import React from "react";
import CreateChartOfGroup from "./create-chart-of-group";
import UpdateChartOfGroup from "./update-chart-of-group";

const ChartOfGroupModal = () => {
  const addModal = useAddModal();
  const updateModal = useUpdateModal();
  const deleteChartOfGroup = useDelete({
    endpoints: endpoints.chartOfAccount.group.delete,
    invalidates: [apiTags.chartOfAccount.group.list],
  });
  return (
    <React.Fragment>
      {/* Delete Modal */}
      <DeleteModal
        isOpen={deleteChartOfGroup.isOpen}
        onCancel={deleteChartOfGroup.handleCancel}
        onConfirm={deleteChartOfGroup.handleDelete}
      />

      {/* Create Chart Of Account */}
      <ModalWrapper
        className="xl:max-w-xl"
        isOpen={addModal.isOpen}
        name="Create chart of group"
        onOpenChange={addModal.handleCloseModal}
      >
        <CreateChartOfGroup />
      </ModalWrapper>

      {/* Update Chart Of Account */}
      <ModalWrapper
        className="xl:max-w-xl"
        isOpen={updateModal.isOpen}
        name="Update chart of group"
        onOpenChange={updateModal.handleCloseModal}
      >
        <UpdateChartOfGroup />
      </ModalWrapper>
    </React.Fragment>
  );
};

export default ChartOfGroupModal;
