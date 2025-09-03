import { DeleteIcon, EditIcon } from '@/components/actions/TableComp';
import useDisclosure from '@/hooks/useDisclousre';
import UpdateLanguageModal from './UpdateLanguage';
import DeleteModal from '@/components/DeleteModal';
// import useDeleteLanguage from "../hooks/useDeleteLanguage";

interface TableActionsProps<T> {
  row: T;
  className?: string;
}

function LanguageActionButtons<T>({
  // row,
  className = 'flex items-center gap-4 ml-5',
}: TableActionsProps<T>) {
  const updateModal = useDisclosure();
  const deleteModal = useDisclosure();

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
          {' '}
          <EditIcon />
        </div>
        <div onClick={handleDelete}>
          <DeleteIcon />
        </div>
      </div>

      <UpdateLanguageModal
        isOpen={updateModal?.isOpen}
        handleCloseModal={updateModal?.close}
      />

      <DeleteModal
        isOpen={deleteModal.isOpen}
        onCancel={deleteModal.close}
        // onConfirm={isSuccess}
      />
    </>
  );
}

export default LanguageActionButtons;
