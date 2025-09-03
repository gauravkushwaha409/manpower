import type { ISearchSectionProps } from '@/types';
import { Search, Settings2 } from 'lucide-react';
import type React from 'react';

const SearchSection = ({
  showAdjustmentIcon = false,
  styleClass,
  search,
  setSearch,
}: ISearchSectionProps) => {
  return (
    <div
      className={`flex items-center bg-white px-3 border border-border rounded-lg max-w-md ${styleClass}`}
    >
      <Search size={20} className="mr-3 text-gray-400" />
      <input
        type="text"
        value={search}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
          setSearch?.(e.target.value);
        }}
        placeholder="Search"
        className="flex-1 bg-transparent outline-none placeholder:font-[400] text-gray-700 placeholder:text-caption placeholder:text-sm"
      />
      {showAdjustmentIcon && (
        <div className="flex justify-center items-center bg-secondary-50 ml-3 p-1 rounded-xl">
          <Settings2 size={20} className="text-secondary-600" />
        </div>
      )}
    </div>
  );
};

export default SearchSection;
