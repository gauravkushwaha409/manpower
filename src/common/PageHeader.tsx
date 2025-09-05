import { PlusCircle } from 'lucide-react';
import React from 'react';
import { Link } from 'react-router-dom';

interface IHeaderProps {
  title: string;
  handleAddClick?: () => void;
  handleClickExport?: () => void;
  showAddButton?: boolean;
  routePath?: string;
}

const PageHeader: React.FC<IHeaderProps> = ({
  title,
  showAddButton = true,
  routePath,
}) => {
  return (
    <div className="w-full h-full">
      <div className="flex md:flex-row flex-col justify-between items-center gap-4 pt-6">
        <div>
          <p className="flex items-center">
            <span className="text-Black/black-700 typography-heading-poppins-medium">
              {title}
            </span>
          </p>
        </div>

        {showAddButton && routePath && (
          <Link
            to={routePath}
            className="flex justify-center items-center gap-2 bg-primary-400 hover:to-primary-600 shadow-md hover:shadow-2xl px-6 py-2 rounded-sm font-medium text-white active:scale-95 transition-all duration-200 ease-in-out"
          >
            <PlusCircle size={14} className="cursor-pointer" />
            <span className="typography-button-text">Add</span>
          </Link>
        )}
      </div>
    </div>
  );
};

export default PageHeader;
