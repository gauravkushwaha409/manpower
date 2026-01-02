import { endpoints } from "@/api/endpoints";
import PageHeader from "@/common/PageHeader";
import SearchFilter from "@/components/search-filter";
import ModalWrapper from "@/components/shadcn/modal-wrapper";
import { apiTags } from "@/constant/tag";
import { useUpdateModal } from "@/hooks/use-update-modal";
import { useDelete } from "@/hooks/useDelete";
import ShramTable from "./partials/orientation-list";
import UpdateShram from "./partials/update-shram";
import DeleteModal from "@/components/DeleteModal";
import ShramToTicket from "./partials/shram-to-ticket";
import useShramToTicketModal from "./hooks/use-shram-to-ticket-modal";

const Sharam = () => {
  const updateModal = useUpdateModal();
  const deleteInterview = useDelete({
    endpoints: endpoints.shram.delete,
    invalidates: [apiTags.shram.list],
  });
  const { handleOpenShramToTicket } = useShramToTicketModal();
  return (
    <div className="u-flex-parent">
      <PageHeader title="Shram" />
      <SearchFilter
        dateFilter
        selectFilter={[
          {
            placeholder: "Select Job Title",
            paramsKey: "job-title",
            option: [
              { label: "Frontend Developer", value: "frontend-developer" },
              { label: "Backend Developer", value: "backend-developer" },
              { label: "UI/UX Designer", value: "ui-ux designer" },
            ],
          },
          {
            placeholder: "Select employer",
            paramsKey: "employer",
            option: [{ label: "Dome Infosyss", value: "dome-infosyss" }],
          },
        ]}
        moveToModule={{
          moduleName: "ticket",
          handleClick: handleOpenShramToTicket,
        }}
      />
      <ShramTable />

      {/* Shram To Ticket */}
      <ShramToTicket />

      {/* Update Medical */}
      <ModalWrapper
        className="xl:max-w-xl"
        isOpen={updateModal.isOpen}
        name="Update Shram"
        onOpenChange={updateModal.handleCloseModal}
      >
        <UpdateShram />
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
export default Sharam;
