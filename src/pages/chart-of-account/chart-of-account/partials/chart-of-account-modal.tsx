import { endpoints } from "@/api/endpoints";
import DeleteModal from "@/components/DeleteModal";
import ModalWrapper from "@/components/shadcn/modal-wrapper";
import { apiTags } from "@/constant/tag";
import { useAddModal } from "@/hooks/add-modal";
import { useUpdateModal } from "@/hooks/update-modal";
import { useDelete } from "@/hooks/useDelete";
import React from "react";
import CreateChartOfAccount from "./create-chart-of-account";
import UpdateChartOfAccount from "./update-chart-of-account";

const ChartOfAccountModal = () => {
  const addModal = useAddModal();
  const updateModal = useUpdateModal();
  const deleteDocument = useDelete({
    endpoints: endpoints.chartOfAccount.account.delete,
    invalidates: [apiTags.chartOfAccount.account.list],
  });
  return (
    <React.Fragment>
      {/* Delete Modal */}
      <DeleteModal
        isOpen={deleteDocument.isOpen}
        onCancel={deleteDocument.handleCancel}
        onConfirm={deleteDocument.handleDelete}
      />

      {/* Create Chart Of Account */}
      <ModalWrapper
        className="xl:max-w-xl"
        isOpen={addModal.isOpen}
        name="Create chart of account"
        onOpenChange={addModal.handleCloseModal}
      >
        <CreateChartOfAccount />
      </ModalWrapper>

      {/* Update Chart Of Account */}
      <ModalWrapper
        className="xl:max-w-xl"
        isOpen={updateModal.isOpen}
        name="Update chart of account"
        onOpenChange={updateModal.handleCloseModal}
      >
        <UpdateChartOfAccount />
      </ModalWrapper>
    </React.Fragment>
  );
};

export default ChartOfAccountModal;
