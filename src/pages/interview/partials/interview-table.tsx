import TableWrapper from "@/components/TableWrapper";
import Table from "@/components/Table";
import useInterviewList from "../hooks/use-interview-list";
import InterviewColumns, { interviewData } from "./interview-column";

const InterviewTable = () => {
  const interviewList = useInterviewList();
  return (
    <TableWrapper wrapperClassName="mt-4" isLoading={false}>
      <Table
        columns={InterviewColumns()}
        data={interviewData}
        rowSelection={interviewList.rowSelection}
        setRowSelection={interviewList.setRowSelection}
      />
    </TableWrapper>
  );
};

export default InterviewTable;
