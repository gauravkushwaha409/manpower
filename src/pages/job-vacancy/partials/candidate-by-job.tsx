import TableWrapper from "@/components/TableWrapper";
import useCandidateByJob from "../hooks/use-candidate-by-job";
import Table from "@/components/Table";
import { CandidateByJobColumn } from "./candidate-by-job-column";
import { candidateData } from "@/pages/candidate/partials/candidate-column";

const CandidateByJobTable = () => {
  const candidateByJob = useCandidateByJob();
  return (
    <TableWrapper isLoading={candidateByJob.isLoading}>
      <Table
        data={candidateByJob.response?.data?.records || candidateData}
        columns={CandidateByJobColumn()}
      />
    </TableWrapper>
  );
};
export default CandidateByJobTable;
