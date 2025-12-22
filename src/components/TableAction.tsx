import { Eye, Pen, Trash2 } from "lucide-react";
import React from "react";

interface IAction extends React.DOMAttributes<HTMLButtonElement> {
  active: boolean;
}

interface IActionItem extends React.DOMAttributes<HTMLButtonElement> {
  icon: React.ElementType;
  color?: string;
  toolTip: string;
}
interface IProps {
  view?: IAction;
  edit?: IAction;
  del?: IAction;
  actionList?: IActionItem[];
}

const TableAction: React.FC<IProps> = ({
  del = { active: false },
  edit = { active: false },
  view = { active: false },
  actionList,
}) => {
  const { active: deleteActive, ...deleteProps } = del;
  const { active: viewActive, ...viewProps } = view;
  const { active: editActive, ...editProps } = edit;
  return (
    <div className="flex items-center gap-x-3 px-2.5">
      {viewActive && (
        <button title="View" {...viewProps}>
          <Eye
            className="shrink-0 cursor-pointer hover:scale-125 transition-all duration-300"
            color="#B36094"
            size={20}
          />
        </button>
      )}

      {editActive && (
        <button title="Edit" {...editProps}>
          <Pen
            className="shrink-0 cursor-pointer hover:scale-125 transition-all duration-300"
            color="#D0021B"
            size={20}
          />
        </button>
      )}

      {deleteActive && (
        <button title="Delete" {...deleteProps}>
          <Trash2
            className="shrink-0 cursor-pointer hover:scale-125 transition-all duration-300"
            color="#D0021B"
            size={20}
          />
        </button>
      )}

      {actionList?.length &&
        actionList.map(
          ({ icon: Icon, toolTip, color = "#D0021B", ...props }) => (
            <button key={toolTip} title={toolTip} {...props}>
              <Icon
                className="shrink-0 cursor-pointer hover:scale-125 transition-all duration-300"
                color={color}
                size={20}
              />
            </button>
          )
        )}
    </div>
  );
};
export default TableAction;
