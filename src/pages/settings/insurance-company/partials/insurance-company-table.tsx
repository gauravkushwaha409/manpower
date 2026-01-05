import Table from "@/components/Table";
import TableWrapper from "@/components/TableWrapper";
import useInsuranceCompanyList from "../hooks/use-insurance-company-list";
import InsuranceCompanyColumns, {
  insuranceCompanyData,
} from "./insurance-company-columns";

export default function InsuranceCompanyTable() {
  const insuranceCompanyList = useInsuranceCompanyList();
  return (
    <TableWrapper
      wrapperClassName="mt-4"
      isLoading={false}
      isDataAvailable={true}
    >
      <Table
        columns={InsuranceCompanyColumns()}
        data={insuranceCompanyData}
        getRowId={(row) => row.id}
        rowSelection={insuranceCompanyList.rowSelection}
        setRowSelection={insuranceCompanyList.setRowSelection}
      />
    </TableWrapper>
  );
}
