import { endpoints } from "@/api/endpoints";
import PageHeader from "@/common/PageHeader";
import DeleteModal from "@/components/DeleteModal";
import SearchFilter from "@/components/search-filter";
import ModalWrapper from "@/components/shadcn/modal-wrapper";
import { apiTags } from "@/constant/tag";
import { useUpdateModal } from "@/hooks/use-update-modal";
import { useDelete } from "@/hooks/useDelete";
import InsuranceTable from "./partials/insurance-list";
import UpdateInsurance from "./partials/update-insurance";
import InsuranceToShram from "./partials/insurance-to-shram";
import useInsuranceToShramModal from "./hooks/use-insurance-to-shram-modal";

const Insurance = () => {
  const updateModal = useUpdateModal();
  const deleteInsurance = useDelete({
    endpoints: endpoints.insurance.delete,
    invalidates: [apiTags.insurance.list],
  });

  const { handleOpenInsuranceToShram } = useInsuranceToShramModal();

  return (
    <div className="u-flex-parent">
      <PageHeader title="Insurance" />

      <SearchFilter
        dateFilter
        selectFilter={[]}
        moveToModule={{
          moduleName: "shram",
          handleClick: handleOpenInsuranceToShram,
        }}
      />

      <InsuranceTable />

      {/* Insurance to shram */}
      <InsuranceToShram />

      {/* Update Insurance */}
      <ModalWrapper
        className="xl:max-w-xl"
        isOpen={updateModal.isOpen}
        name="Update Insurance"
        onOpenChange={updateModal.handleCloseModal}
      >
        <UpdateInsurance />
      </ModalWrapper>

      {/* Delete Modal */}
      <DeleteModal
        isOpen={deleteInsurance.isOpen}
        onCancel={deleteInsurance.handleCancel}
        onConfirm={deleteInsurance.handleDelete}
      />
    </div>
  );
};

export default Insurance;
