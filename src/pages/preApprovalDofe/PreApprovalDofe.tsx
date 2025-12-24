import PageHeader from "@/common/PageHeader";
import { PATH } from "@/constant/path";
import PreApprovalDofeTable from "./partials/PreApprovalDofeTable";
import SearchFilter from "@/components/search-filter";
import { useNavigate } from "react-router-dom";

const PreApprovalDofe = () => {
  const navigate = useNavigate();
  return (
    <div className="u-flex-parent">
      <PageHeader
        title="Pre Approval DOFE"
        routePath={PATH.preApprovalDofe.create}
      />
      <SearchFilter
        dateFilter
        handleAddClick={() => {
          navigate(PATH.preApprovalDofe.create);
        }}
        selectFilter={[
          {
            placeholder: "Select Comapny",
            option: [{ label: "Dome Infosys", value: "dome-infosys" }],
            paramsKey: "company",
          },
        ]}
      />
      <PreApprovalDofeTable />
    </div>
  );
};

export default PreApprovalDofe;
