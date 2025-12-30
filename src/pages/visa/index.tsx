import { endpoints } from "@/api/endpoints";
import PageHeader from "@/common/PageHeader";
import SearchFilter from "@/components/search-filter";
import { apiTags } from "@/constant/tag";
import { useUpdateModal } from "@/hooks/update-modal";
import { useDelete } from "@/hooks/useDelete";
import VisaTable from "./partials/visa-list";
import ModalWrapper from "@/components/shadcn/modal-wrapper";
import DeleteModal from "@/components/DeleteModal";
import UpdateVisa from "./partials/update-visa";
import useVisaToOrientationModal from "./hooks/use-visa-to-orientation-modal";
import VisaToOrientation from "./partials/visa-to-orientation";

const Visa = () => {
  const updateModal = useUpdateModal();
  const { handleOpenVisaToOrientation } = useVisaToOrientationModal();
  const deleteInterview = useDelete({
    endpoints: endpoints.visa.delete,
    invalidates: [apiTags.visa.list],
  });
  return (
    <div className="u-flex-parent">
      <PageHeader title="Visa" />
      <SearchFilter
        dateFilter
        selectFilter={[]}
        moveToModule={{
          moduleName: "orientation",
          handleClick: handleOpenVisaToOrientation,
        }}
      />
      <VisaTable />

      {/* Move Visa Candidate to Orientation */}
      <VisaToOrientation />

      {/* Update Medical */}
      <ModalWrapper
        className="xl:max-w-xl"
        isOpen={updateModal.isOpen}
        name="Update Visa"
        onOpenChange={updateModal.handleCloseModal}
      >
        <UpdateVisa />
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
export default Visa;
