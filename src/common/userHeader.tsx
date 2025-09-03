import React from "react";
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
}) => {
  return (
    <div className="h-full w-full">
      <div className="py-6 flex flex-col md:flex-row gap-4 items-center justify-between">
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

        <button onClick={handleAddClick}>
          <img className="w-11 cursor-pointer" src={plusIcon} alt="" />
        </button>
      </div>
    </div>
  );
};

export default UserHeader;
