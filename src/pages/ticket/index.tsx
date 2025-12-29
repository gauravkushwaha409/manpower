import { endpoints } from "@/api/endpoints";
import PageHeader from "@/common/PageHeader";
import SearchFilter from "@/components/search-filter";
import { apiTags } from "@/constant/tag";
import { useAddModal } from "@/hooks/add-modal";
import { useUpdateModal } from "@/hooks/update-modal";
import { useDelete } from "@/hooks/useDelete";
import TicketTable from "./partials/ticket-list";
import ModalWrapper from "@/components/shadcn/modal-wrapper";
import CreateTicket from "./partials/create-ticket";
import UpdateTicket from "./partials/update-ticket";
import DeleteModal from "@/components/DeleteModal";

const Ticket = () => {
  const addModal = useAddModal();
  const updateModal = useUpdateModal();
  const deleteInterview = useDelete({
    endpoints: endpoints.ticket.delete,
    invalidates: [apiTags.ticket.list],
  });
  return (
    <div className="u-flex-parent">
      <PageHeader title="Ticket" />
      <SearchFilter
        dateFilter
        handleAddClick={addModal.handleOpenModal}
        selectFilter={[]}
      />
      <TicketTable />

      {/* Create Medical */}
      <ModalWrapper
        className="xl:max-w-xl"
        isOpen={addModal.isOpen}
        name="Create Ticket"
        onOpenChange={addModal.handleCloseModal}
      >
        <CreateTicket />
      </ModalWrapper>

      {/* Update Medical */}
      <ModalWrapper
        className="xl:max-w-xl"
        isOpen={updateModal.isOpen}
        name="Update Ticket"
        onOpenChange={updateModal.handleCloseModal}
      >
        <UpdateTicket />
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
export default Ticket;
