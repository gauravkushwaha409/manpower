import { endpoints } from "@/api/endpoints";
import PageHeader from "@/common/PageHeader";
import SearchFilter from "@/components/search-filter";
import { apiTags } from "@/constant/tag";
import { useAddModal } from "@/hooks/add-modal";
import { useUpdateModal } from "@/hooks/update-modal";
import { useDelete } from "@/hooks/useDelete";
import MedicalTable from "./partials/medical-list";
import ModalWrapper from "@/components/shadcn/modal-wrapper";
import DeleteModal from "@/components/DeleteModal";
import CreateMedical from "./partials/create-medical";
import UpdateMedical from "./partials/update-medical";
import MedicalToVisa from "./partials/medical-to-visa";
import useMedicalToVisaModal from "./hooks/use-medical-to-visa-modal";

const Medical = () => {
  const addModal = useAddModal();
  const updateModal = useUpdateModal();
  const { handleOpenMedicalToVisa } = useMedicalToVisaModal();
  const deleteInterview = useDelete({
    endpoints: endpoints.medical.delete,
    invalidates: [apiTags.medical.list],
  });
  return (
    <div className="u-flex-parent">
      <PageHeader title="Medical" />
      <SearchFilter
        dateFilter
        handleAddClick={addModal.handleOpenModal}
        selectFilter={[]}
        moveToModule={{
          moduleName: "visa",
          handleClick: handleOpenMedicalToVisa,
        }}
      />
      <MedicalTable />

      {/* Move medical to visa */}
      <MedicalToVisa />

      {/* Create Medical */}
      <ModalWrapper
        className="xl:max-w-xl"
        isOpen={addModal.isOpen}
        name="Create Medical"
        onOpenChange={addModal.handleCloseModal}
      >
        <CreateMedical />
      </ModalWrapper>

      {/* Update Medical */}
      <ModalWrapper
        className="xl:max-w-xl"
        isOpen={updateModal.isOpen}
        name="Update Medical"
        onOpenChange={updateModal.handleCloseModal}
      >
        <UpdateMedical />
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

export default Medical;
