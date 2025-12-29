import PageHeader from "@/common/PageHeader";
import SearchFilter from "@/components/search-filter";
import { useNavigate } from "react-router-dom";
import { PATH } from "@/constant/path";
import CandidateTable from "./partials/candidate-table";
import JobByCandidate from "./partials/job-by-candidate";

const Candidate = () => {
  const navigate = useNavigate();
  return (
    <div className="u-flex-parent">
      <PageHeader title="All Candidate" />
      <SearchFilter
        dateFilter
        handleAddClick={() => {
          navigate(PATH.candidate.create);
        }}
        selectFilter={[
          {
            placeholder: "Select Comapny",
            option: [{ label: "Dome Infosys", value: "dome-infosys" }],
            paramsKey: "company",
          },
        ]}
        moveToModule={{ moduleName: "Interview", handleClick: () => {} }}
      />
      <CandidateTable />

      {/* Job By Candidate */}
      <JobByCandidate />
    </div>
  );
};

export default Candidate;
