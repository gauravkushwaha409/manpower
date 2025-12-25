import Table from "@/components/Table";
import TableWrapper from "@/components/TableWrapper";
import useJobTitleList from "../hooks/use-job-title-list";
import JobTitleColumns, { jobTitleData } from "./job-title-column";

const JobTitleTable = () => {
  const jobTitleList = useJobTitleList();
  return (
    <TableWrapper wrapperClassName="mt-4" isLoading={false}>
      <Table
        columns={JobTitleColumns()}
        data={jobTitleData}
        rowSelection={jobTitleList.rowSelection}
        setRowSelection={jobTitleList.setRowSelection}
      />
    </TableWrapper>
  );
};

export default JobTitleTable;
