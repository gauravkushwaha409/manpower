import { DeleteIcon, EditIcon } from "@/components/actions/TableComp";
import useDisclosure from "@/hooks/useDisclousre";
import UpdateCountryModal from "@/pages/country/modal/UpdateCountry";
import useDeleteCountry from "@/pages/country/hooks/useDeleteCountry";
import DeleteModal from "@/components/DeleteModal";

interface TableActionsProps<T> {
  row: T;
  onEdit: (row: T) => void;
  onDelete: (row: T) => void;
  className?: string;
}

function CountryActions<T>({
  row,
  onEdit,
  onDelete,
  className = "flex items-center gap-4 ml-5",
}: TableActionsProps<T>) {
  const updateModal = useDisclosure();
  const deleteModal = useDisclosure();

  const { handleDeleteCountry } = useDeleteCountry();

  const handleEdit = () => {
    onEdit(row);
    updateModal?.open();
  };

  const handleDelete = () => {
    onDelete(row);
    deleteModal?.open();
  };

  return (
    <>
      <div className={className}>
        <button onClick={handleEdit}>
          <EditIcon />
        </button>
        <button onClick={handleDelete}>
          <DeleteIcon />
        </button>
      </div>

      <UpdateCountryModal
        isOpen={updateModal?.isOpen}
        handleCloseModal={updateModal?.close}
      />

      <DeleteModal
        isOpen={deleteModal.isOpen}
        onCancel={deleteModal.close}
        onConfirm={handleDeleteCountry}
      />
    </>
  );
}

export default CountryActions;
