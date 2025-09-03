import { DeleteIcon, EditIcon } from "@/components/actions/TableComp";
import useDisclosure from "@/hooks/useDisclousre";
// import useDeleteCountry from "@/pages/country/hooks/useDeleteCountry";
import DeleteModal from "@/components/DeleteModal";
import UpdateTicket from "./UpdateTicket";

interface TableActionsProps<T> {
  row: T;
  className?: string;
}

function TicketActions<T>({
  //   row,
  className = "flex items-center gap-4 ml-5",
}: TableActionsProps<T>) {
  const updateModal = useDisclosure();
  const deleteModal = useDisclosure();

  //   const { handleDeleteCountry } = useDeleteCountry();

  const handleEdit = () => {
    updateModal?.open();
  };

  const handleDelete = () => {
    deleteModal?.open();
  };

  return (
    <>
      <div className={className}>
        <div onClick={handleEdit}>
          <EditIcon />
        </div>
        <div onClick={handleDelete}>
          <DeleteIcon />
        </div>
      </div>

      <UpdateTicket
        isOpen={updateModal?.isOpen}
        handleCloseModal={updateModal?.close}
      />

      <DeleteModal
        isOpen={deleteModal.isOpen}
        onCancel={deleteModal.close}
        // onConfirm={handleDeleteCountry}
      />
    </>
  );
}

export default TicketActions;
