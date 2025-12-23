import PageHeader from "@/common/PageHeader";
import { PATH } from "@/constant/path";
import PreApprovalDofeTable from "./partials/PreApprovalDofeTable";
import SearchFilter from "@/components/search-filter";

const PreApprovalDofe = () => {
  return (
    <div className="u-flex-parent border border-green-500">
      <PageHeader
        title="Pre Approval DOFE"
        routePath={PATH.preApprovalDofe.create}
      />
      <SearchFilter />
      <PreApprovalDofeTable />
    </div>
  );
};

export default PreApprovalDofe;
