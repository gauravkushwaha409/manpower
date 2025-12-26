import SearchSection from "@/components/reusable-component/SearchSection";
import useSearch from "@/hooks/useSearch";
import { DateRangePicker } from "./shadcn/DateFilterRange";
import { useSearchParams } from "react-router-dom";
import { useState } from "react";
import { DateRange } from "react-day-picker";
import { format, parseISO } from "date-fns";
import { Download, Funnel, Plus } from "lucide-react";
import {
  useGetSearchParams,
  useUpdateSearchParams,
} from "@/hooks/updateSearchParams";
import { SelectFilter } from "./shadcn/SelectFilter";
import { IOption } from "./form/form-input-select";

const SearchFilter = ({
  dateFilter,
  selectFilter,
  handleAddClick,
}: {
  dateFilter: boolean;
  selectFilter: {
    placeholder: string;
    option: IOption[];
    paramsKey: string;
  }[];
  handleAddClick: () => void;
}) => {
  const updateSearchParams = useUpdateSearchParams();
  const getSearchParams = useGetSearchParams();
  const isFilter = getSearchParams("filter");
  const handleFilterClick = () => {
    if (getSearchParams("filter") === "active")
      updateSearchParams({}, ["filter"]);
    else updateSearchParams({ filter: "active" });
  };
  return (
    <div>
      <ActionButton
        handleAddFilter={handleAddClick}
        handleClickFilter={handleFilterClick}
      />

      <div
        className={`grid transition-all duration-500 ease-in-out ${
          isFilter ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden">
          <DynamicFilter selectFilter={selectFilter} dateFilter={dateFilter} />
        </div>
      </div>
    </div>
  );
};

export default SearchFilter;

// Components
const ActionButton = ({
  handleClickFilter,
  handleAddFilter,
}: {
  handleClickFilter: () => void;
  handleAddFilter: () => void;
}) => {
  const search = useSearch();
  return (
    <div className="my-2.5 flex items-center justify-between">
      <SearchSection
        search={search.get()}
        setSearch={search.set}
        styleClass="w-72 h-10 rounded-full bg-white"
      />

      <div className="flex items-center gap-x-2">
        <button
          onClick={handleClickFilter}
          className="px-3 py-1 flex items-center gap-x-2 typo-mid-bd-reg rounded-4xl border border-text-50 text-text-600 cursor-pointer hover:bg-secondary-500 hover:text-white transition-all ease-in-out duration-500"
        >
          <Funnel size={16} />
          Filter
        </button>

        <button className="px-3 py-1 flex items-center gap-x-2 typo-mid-bd-reg rounded-4xl border border-text-50 text-text-600 cursor-pointer hover:bg-secondary-500 hover:text-white transition-all ease-in-out duration-500">
          <Download size={16} />
          Export
        </button>

        <button
          onClick={(e) => {
            e.preventDefault();
            handleAddFilter();
          }}
          className="px-3 py-1 flex items-center gap-x-2 typo-mid-bd-reg rounded-4xl text-white bg-secondary-500 cursor-pointer hover:bg-secondary-700 transition-all ease-in-out duration-500"
        >
          <Plus size={16} />
          Add
        </button>
      </div>
    </div>
  );
};

// Filter Component
const DynamicFilter = ({
  dateFilter,
  selectFilter,
}: {
  dateFilter: boolean;
  selectFilter: {
    placeholder: string;
    option: IOption[];
    paramsKey: string;
  }[];
}) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const fromParam = searchParams.get("from");
  const toParam = searchParams.get("to");
  const [dateRange, setDateRange] = useState<DateRange | undefined>(() => {
    if (fromParam && toParam) {
      return {
        from: parseISO(fromParam),
        to: parseISO(toParam),
      };
    }
    return undefined;
  });

  const handleDateChange = (range: DateRange | undefined) => {
    setDateRange(range);
    const params = new URLSearchParams(searchParams);

    if (!range?.from || !range?.to) {
      params.delete("from");
      params.delete("to");
    } else {
      params.set("from", format(range.from, "yyyy-MM-dd"));
      params.set("to", format(range.to, "yyyy-MM-dd"));
    }

    setSearchParams(params);
  };
  return (
    <div className="flex items-center justify-between">
      {/* Date Range Filter */}
      {dateFilter && (
        <DateRangePicker onChange={handleDateChange} value={dateRange} />
      )}
      {selectFilter?.map((item) => (
        <SelectFilter
          key={item?.paramsKey}
          paramsKey={item?.paramsKey}
          placeHolder={item?.placeholder}
          option={item.option}
        />
      ))}
    </div>
  );
};
