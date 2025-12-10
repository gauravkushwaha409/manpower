import { DeleteIcon, EditIcon } from "@/components/actions/TableComp";
import useDisclosure from "@/hooks/useDisclousre";
import DeleteModal from "@/components/DeleteModal";
import { PATH } from "@/constant/path";
// import useDeletePreApprovalDofe from "../hooks/useDeletePreApprovalDofe";

interface TableActionsProps<T extends { id: string }> {
  row: T;
  className?: string;
}

function PreApprovalDofeActionButtons<T extends { id: string }>({
  className = "flex items-center gap-4 ml-5",
}: TableActionsProps<T>) {
  const deleteModal = useDisclosure();

  const handleDelete = () => {
    deleteModal?.open();
  };

  return (
    <>
      <div className={className}>
        <div className={className}>
          <div>
            <EditIcon updateRoutePath={PATH.dashboard.updatePreApprovalDofe} />
          </div>
          <div onClick={handleDelete}>
            <DeleteIcon />
          </div>
        </div>

        <DeleteModal isOpen={deleteModal.isOpen} onCancel={deleteModal.close} />
      </div>
    </>
  );
}

export default PreApprovalDofeActionButtons;
