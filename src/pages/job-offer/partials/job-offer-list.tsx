import TableWrapper from "@/components/TableWrapper";
import Table from "@/components/Table";
import useJobOfferList from "../hooks/use-job-offer-list";
import JobOfferColumns, { jobOfferData } from "./job-offer-column";

const JobOfferTable = () => {
  const jobOfferList = useJobOfferList();
  return (
    <TableWrapper wrapperClassName="mt-4" isLoading={false}>
      <Table
        columns={JobOfferColumns()}
        data={jobOfferData}
        rowSelection={jobOfferList.rowSelection}
        setRowSelection={jobOfferList.setRowSelection}
      />
    </TableWrapper>
  );
};

export default JobOfferTable;
