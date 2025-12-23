import SearchSection from "@/components/reusable-component/SearchSection";
import useSearch from "@/hooks/useSearch";
import { DateRangePicker } from "./shadcn/DateFilterRange";
import { useSearchParams } from "react-router-dom";
import { useState } from "react";
import { DateRange } from "react-day-picker";
import { format, parseISO } from "date-fns";
const SearchFilter = () => {
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
  const search = useSearch();
  return (
    <div className="my-2.5 flex items-center justify-between">
      <SearchSection
        search={search.get()}
        setSearch={search.set}
        styleClass="w-72 h-10 rounded-full bg-white"
      />
      <DateRangePicker onChange={handleDateChange} value={dateRange} />
    </div>
  );
};

export default SearchFilter;
