import TableWrapper from "@/components/TableWrapper";
import useCountryList from "../hooks/use-country-list";
import Table from "@/components/Table";
import CountryColumns, { countryData } from "./country-column";

const CountryTable = () => {
  const countryList = useCountryList();
  return (
    <TableWrapper wrapperClassName="mt-4" isLoading={false}>
      <Table
        columns={CountryColumns()}
        data={countryData}
        rowSelection={countryList.rowSelection}
        setRowSelection={countryList.setRowSelection}
      />
    </TableWrapper>
  );
};

export default CountryTable;
