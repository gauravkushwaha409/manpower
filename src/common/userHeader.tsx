import React from "react";
import exportIcon from "../assets/icons/export_user.svg";
import printIcon from "../assets/icons/print_user.svg";
import plusIcon from "../assets/icons/rounded_plus.svg";

interface IHeaderProps {
  title: string;
  number: number;
  handleAddClick?: () => void;
  handleClickExport?: () => void;
}

const UserHeader: React.FC<IHeaderProps> = ({
  title,
  number,
  handleAddClick,
  handleClickExport,
}) => {
  return (
    <div className="h-full w-full">
      {/* Header */}
      <div className="py-6 flex flex-col md:flex-row gap-4 items-center justify-between">
        {/* Left content */}
        <div>
          <p className="flex items-center">
            <span className="typography-heading-poppins-medium text-Black/black-700">
              {title}
              <sub className="ml-1 typography-poppins-medium-c1 text-Black/black-300 ">
                ({number})
              </sub>
            </span>
          </p>
        </div>

        {/* right content */}
        <div className="flex items-center gap-8">
          <button
            onClick={handleClickExport}
            className="flex items-center gap-2 bg-white py-3 px-2 border-[1px] border-Blue-500 rounded-lg"
          >
            <img src={exportIcon} alt="" />
            <span className="typography-caption-c1-semibold text-Blue-500">
              Export
            </span>
          </button>

          <div className="flex items-center gap-2 bg-white border py-3 px-2 border-Blue-500 rounded-lg">
            <img src={printIcon} alt="" />
            <span className="typography-caption-c1-semibold text-Blue-500">
              Print
            </span>
          </div>
          <button onClick={handleAddClick}>
            <img className="w-11 cursor-pointer" src={plusIcon} alt="" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default UserHeader;
