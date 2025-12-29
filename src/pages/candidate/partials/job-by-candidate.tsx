import ModalWrapper from "@/components/shadcn/modal-wrapper";
import useJobByCandidate, {
  useJobByCandidateModal,
} from "../hooks/use-job-by-candidate";
import TableWrapper from "@/components/TableWrapper";
import Table from "@/components/Table";
import {
  JobByCandidateColumn,
  jobByCandidateData,
} from "./job-by-candidate-column";

const JobByCandidate = () => {
  const { isJobByCandidateOpen, handleCloseJobByCandidate } =
    useJobByCandidateModal();
  return (
    <ModalWrapper
      isOpen={isJobByCandidateOpen}
      onOpenChange={handleCloseJobByCandidate}
      name="Job list by candidate"
      description="Total job applied by candidate"
      childrenWrapperClassName="overflow-x-hidden py-1"
    >
      <JobByCandidateTable />
    </ModalWrapper>
  );
};

export default JobByCandidate;

const JobByCandidateTable = () => {
  const { isLoading, response } = useJobByCandidate();
  return (
    <TableWrapper isLoading={isLoading}>
      <Table
        columns={JobByCandidateColumn()}
        data={response?.data?.records || jobByCandidateData}
        totalItems={response?.data?.totalRecords || 0}
        totalPages={response?.data?.totalPages || 0}
      />
    </TableWrapper>
  );
};
