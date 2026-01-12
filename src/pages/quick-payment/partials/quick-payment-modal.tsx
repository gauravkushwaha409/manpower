import DeleteModal from "@/components/DeleteModal";
import { useDelete } from "@/hooks/useDelete";
import React from "react";

const QuickPaymentModal = () => {
  const deleteQuickPayment = useDelete({ endpoints: "", invalidates: [""] });
  return (
    <React.Fragment>
      <DeleteModal
        onCancel={deleteQuickPayment.handleCancel}
        onConfirm={deleteQuickPayment.handleDelete}
        isOpen={deleteQuickPayment.isOpen}
      />
    </React.Fragment>
  );
};

export default QuickPaymentModal;
