import PageHeader from "@/common/PageHeader"
import Breadcrumb from "@/components/reusable-component/Breadcrumb"
import Table from "@/components/Table"
import { PATH } from "@/constant/path"
import CandidateFilterList from "./partials/CandidateFilterList"
import { CandidateColumns } from "./partials/CandidateColumns"
import { CandidateTableData } from "./hooks/useGetCandidate"


const Candidate = () => {
  return (
     <div className="bg-surface w-full min-h-full">
      <Breadcrumb
        items={[
          { label: "Dashboard" },
          {
            label: "Candidates",
          },
        ]}
      />
      <div>
        <div className="w-full h-fit">
          <PageHeader title="Candidates" routePath={PATH.dashboard.addCandidate} />
        </div>
        <div className="py-5">
          <CandidateFilterList />
        </div>
        <div className="overflow-x-visible">
          <Table columns={CandidateColumns} data={CandidateTableData} />
        </div>
      </div>
    </div>
  )
} 

export default Candidate