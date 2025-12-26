import Table from "@/components/Table";
import TableWrapper from "@/components/TableWrapper";
import useJobVacancyList from "../hooks/use-job-vacancy-list";
import JobVacancyColumns, { jobVacancyData } from "./job-vacancy-column";

const JobVacancyTable = () => {
  const jobVacancy = useJobVacancyList();
  return (
    <TableWrapper wrapperClassName="mt-4" isLoading={false}>
      <Table
        columns={JobVacancyColumns()}
        data={jobVacancyData}
        rowSelection={jobVacancy.rowSelection}
        setRowSelection={jobVacancy.setRowSeletion}
      />
    </TableWrapper>
  );
};

export default JobVacancyTable;
