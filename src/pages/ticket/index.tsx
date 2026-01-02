import { endpoints } from "@/api/endpoints";
import PageHeader from "@/common/PageHeader";
import SearchFilter from "@/components/search-filter";
import { apiTags } from "@/constant/tag";
import { useUpdateModal } from "@/hooks/use-update-modal";
import { useDelete } from "@/hooks/useDelete";
import TicketTable from "./partials/ticket-list";
import ModalWrapper from "@/components/shadcn/modal-wrapper";
import UpdateTicket from "./partials/update-ticket";
import DeleteModal from "@/components/DeleteModal";

const Ticket = () => {
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
        selectFilter={[
          {
            option: [{ label: "Dome Infosyss", value: "dome-infosyss" }],
            paramsKey: "employer",
            placeholder: "Select employer...",
          },
          {
            option: [{ label: "Node js", value: "node-js" }],
            paramsKey: "job-title",
            placeholder: "Select job title....",
          },
        ]}
      />
      <TicketTable />

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
