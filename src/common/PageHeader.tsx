import { Plus } from "lucide-react";
import React from "react";

interface IHeaderProps {
  title: string;
  handleAddClick?: () => void;
  handleClickExport?: () => void;
  showAddButton?: boolean;
  routePath?: string;
}

const PageHeader: React.FC<IHeaderProps> = ({ title }) => {
  return (
    <div className="flex md:flex-row flex-col justify-between items-center typo-mid-bd-reg text-text-500">
      <span className="">{title}</span>
      <button className="px-3.5 py-1.5 flex items-center typo-mid-bd-reg rounded-2xl text-white bg-secondary-500">
        <Plus size={16} />
        Add
      </button>
    </div>
  );
};

export default PageHeader;
