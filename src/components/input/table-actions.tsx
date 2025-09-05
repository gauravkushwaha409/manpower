import { DeleteIcon, EditIcon } from '@/components/actions/TableComp';

interface TableActionsProps<T> {
  row: T;
  onEdit: (row: T) => void;
  onDelete: (row: T) => void;
  className?: string;
}

function TableActions<T>({
  row,
  onEdit,
  onDelete,
  className = 'flex items-center gap-4 ml-5',
}: TableActionsProps<T>) {
  const handleEdit = () => {
    onEdit(row);
  };

  const handleDelete = () => {
    onDelete(row);
  };

  return (
    <div className={className}>
      <button onClick={handleEdit}>
        <EditIcon updateRoutePath="#" />
      </button>
      <button onClick={handleDelete}>
        <DeleteIcon />
      </button>
    </div>
  );
}

export default TableActions;
