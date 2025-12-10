import SearchSection from "@/components/reusable-component/SearchSection";
// import { FiFilter } from "react-icons/fi";
// import ExportButton from "@/components/reusable-component/ExportButton";
// import PrintButton from "@/components/reusable-component/PrintButton";

// interface PreApprovalDofeFilterListProps {
//   setSearch: (value: string) => void;
//   search?: string;
//   onFilter?: () => void;
// }

const PreApprovalDofeFilterList = () => {
  return (
    <div className="flex items-center justify-between mb-4">
      <SearchSection
        showAdjustmentIcon={false}
        styleClass="w-72 h-10"
        // search={search}
      />
    </div>
  );
};

export default PreApprovalDofeFilterList;
