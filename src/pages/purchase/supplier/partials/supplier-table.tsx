import Table from "@/components/Table";
import TableWrapper from "@/components/TableWrapper";
import SupplierColumns, { supplierData } from "./supplier-columns";
import useSupplierList from "../hooks/use-supplier-list";

export default function SupplierTable() {
  const supplier = useSupplierList();
  return (
    <TableWrapper
      isLoading={false}
      isDataAvailable={true}
      wrapperClassName="mt-4"
    >
      <Table
        columns={SupplierColumns()}
        data={supplierData}
        getRowId={(row) => row?.id}
        rowSelection={supplier.rowSelection}
        setRowSelection={supplier.SetRowSelection}
      />
    </TableWrapper>
  );
}
