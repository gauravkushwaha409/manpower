import { QueryValue } from "@/hooks/useSearch";
import { Search } from "lucide-react";
import type React from "react";

const SearchSection = ({
  styleClass,
  search,
  setSearch,
}: {
  styleClass?: string;
  search: string;
  setSearch: (value: QueryValue) => void;
}) => {
  return (
    <div
      className={`flex items-center bg-white px-3 border border-border rounded-lg max-w-md ${styleClass}`}
    >
      <Search size={18} className="mr-3 text-gray-400" />
      <input
        type="text"
        spellCheck={false}
        autoComplete="off"
        autoCorrect="off"
        autoCapitalize="off"
        value={search}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
          setSearch(e.target.value);
        }}
        placeholder="Search"
        className="flex-1 bg-transparent outline-none placeholder:font-[400] text-gray-700 placeholder:text-caption placeholder:text-sm"
      />
    </div>
  );
};

export default SearchSection;
