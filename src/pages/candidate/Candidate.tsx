import PageHeader from "@/common/PageHeader";
import SearchFilter from "@/components/search-filter";
import { useNavigate } from "react-router-dom";
import { PATH } from "@/constant/path";
import CandidateTable from "./partials/candidate-table";

const Candidate = () => {
  const navigate = useNavigate();
  return (
    <div className="u-flex-parent">
      <PageHeader title="Candidate" />
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
      <CandidateTable />
    </div>
  );
};

export default Candidate;
