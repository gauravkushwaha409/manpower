import { endpoints } from "@/api/endpoints";
import PageHeader from "@/common/PageHeader";
import DeleteModal from "@/components/DeleteModal";
import SearchFilter from "@/components/search-filter";
import ModalWrapper from "@/components/shadcn/modal-wrapper";
import { apiTags } from "@/constant/tag";
import { useUpdateModal } from "@/hooks/use-update-modal";
import { useDelete } from "@/hooks/useDelete";
import OrientationTable from "./partials/orientation-list";
import UpdateOrientation from "./partials/update-orientation";
import OrientationToShram from "./partials/orientation-to-insurance";
import useOrientationToInsuranceModal from "./hooks/use-orientation-to-insurance-modal";
import OrientationStatusModal from "./partials/orientation-status-modal";

const Orientation = () => {
  const updateModal = useUpdateModal();
  const deleteInterview = useDelete({
    endpoints: endpoints.orientation.delete,
    invalidates: [apiTags.orientation.list],
  });
  const { handleOpenOrientationToInsurance } = useOrientationToInsuranceModal();
  return (
    <div className="u-flex-parent">
      <PageHeader title="Orientation" />
      <SearchFilter
        dateFilter
        selectFilter={[]}
        moveToModule={{
          moduleName: "insurance",
          handleClick: handleOpenOrientationToInsurance,
        }}
      />
      <OrientationTable />

      {/* Orientation to shram */}
      <OrientationToShram />

      {/* Update Orentation Status Modal  */}
      <OrientationStatusModal />

      {/* Update Medical */}
      <ModalWrapper
        className="xl:max-w-xl"
        isOpen={updateModal.isOpen}
        name="Update Orientation"
        onOpenChange={updateModal.handleCloseModal}
      >
        <UpdateOrientation />
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

export default Orientation;
