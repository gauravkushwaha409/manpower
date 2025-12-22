import SearchSection from "@/components/reusable-component/SearchSection";
import useSearch from "@/hooks/useSearch";

const CompanyFilterList = () => {
  const search = useSearch();
  return (
    <div className="flex items-center justify-between my-4">
      <SearchSection
        search={search.get()}
        setSearch={search.set}
        styleClass="w-72 h-10"
      />
    </div>
  );
};

export default CompanyFilterList;
