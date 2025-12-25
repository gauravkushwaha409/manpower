import Table from "@/components/Table";
import TableWrapper from "@/components/TableWrapper";
import IndustryColumn from "./industry-column";
import useGetAllIndustry, { industryData } from "../hooks/use-get-all-industry";

const IndustryTable = () => {
  const industry = useGetAllIndustry();
  return (
    <TableWrapper wrapperClassName="mt-4" isLoading={false}>
      <Table
        columns={IndustryColumn()}
        data={industryData}
        rowSelection={industry.rowSelection}
        setRowSelection={industry.setRowSelection}
      />
    </TableWrapper>
  );
};

export default IndustryTable;
