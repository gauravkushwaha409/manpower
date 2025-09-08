import { DeleteIcon, EditIcon } from "@/components/actions/TableComp";
import useDisclosure from "@/hooks/useDisclousre";
import DeleteModal from "@/components/DeleteModal";
import { PATH } from "@/constant/path";

interface TableActionsProps<T> {
  row: T;
  className?: string;
}

function IndustryActions<T>({
  className = "flex items-center gap-4 ml-5",
}: TableActionsProps<T>) {
  const deleteModal = useDisclosure();

  const handleDelete = () => {
    deleteModal?.open();
  };

  return (
    <>
      <div className={className}>
        <div>
          <EditIcon updateRoutePath={PATH.dashboard.updateIndustry} />
        </div>
        <div onClick={handleDelete}>
          <DeleteIcon />
        </div>
      </div>

      <DeleteModal isOpen={deleteModal.isOpen} onCancel={deleteModal.close} />
    </>
  );
}

export default IndustryActions;
