import { ViewIcon } from "@/components/actions/TableComp";

interface TableActionsProps<T> {
  row: T;
  className?: string;
}

function DashboardTableActions<T>({
  className = "flex items-center gap-4 ml-5",
}: TableActionsProps<T>) {
  return (
    <>
      <div className={className}>
        <ViewIcon id="" />
      </div>
    </>
  );
}

export default DashboardTableActions;
