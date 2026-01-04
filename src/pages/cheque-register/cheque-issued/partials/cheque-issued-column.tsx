import { ColumnDef } from "@tanstack/react-table";
import { IChequeIssuedList } from "../hooks/use-cheque-issued-list";
import { Checkbox } from "@/components/ui/checkbox";
import TableAction from "@/components/TableAction";
import { useDelete } from "@/hooks/useDelete";
import { endpoints } from "@/api/endpoints";
import { apiTags } from "@/constant/tag";
import { useQueryParamState } from "@/hooks/useQueryParamState";
import QUERY_PARAMS from "@/constant/query-params";

export const chequeIssuedData: IChequeIssuedList[] = [
  {
    id: "1",
    supplier_name: "Everest Trading Pvt. Ltd.",
    payee_name: "Everest Trading Pvt. Ltd.",
    cheque_date: "2025-01-05",
    received_date: "2025-01-06",
    amount: "150000",
    cheque_no: "CHK-000231",
    bank: "Nepal Investment Bank",
    status: "pending",
  },
  {
    id: "2",
    supplier_name: "Himalayan Construction",
    payee_name: "Himalayan Construction",
    cheque_date: "2025-01-02",
    received_date: "2025-01-03",
    amount: "275000",
    cheque_no: "CHK-000232",
    bank: "Nabil Bank",
    status: "deposited",
  },
  {
    id: "3",
    supplier_name: "Kathmandu Suppliers",
    payee_name: "Kathmandu Suppliers",
    cheque_date: "2024-12-28",
    received_date: "2024-12-29",
    amount: "98000",
    cheque_no: "CHK-000233",
    bank: "Global IME Bank",
    status: "cleared",
  },
  {
    id: "4",
    supplier_name: "Lumbini Hardware",
    payee_name: "Lumbini Hardware",
    cheque_date: "2024-12-20",
    received_date: "2024-12-22",
    amount: "420000",
    cheque_no: "CHK-000234",
    bank: "NIC Asia Bank",
    status: "bounced",
  },
  {
    id: "5",
    supplier_name: "Pokhara Logistics",
    payee_name: "Pokhara Logistics",
    cheque_date: "2024-12-15",
    received_date: "2024-12-16",
    amount: "187500",
    cheque_no: "CHK-000235",
    bank: "Prabhu Bank",
    status: "cancelled",
  },
];

const ChequeIssuedColumn = (): ColumnDef<IChequeIssuedList>[] => {
  const { handleOpenModal: handleOpenDeleteModal } = useDelete({
    endpoints: endpoints?.chequeIssued.delete,
    invalidates: [apiTags.chequeRegister.chequeIssued.list],
  });
  const updateModal = useQueryParamState(
    QUERY_PARAMS.chequeRegister.chequeIssued.updateChequeIssued.key
  );
  return [
    {
      id: "select",
      header: ({ table }) => {
        return (
          <div className="">
            <Checkbox
              checked={
                table.getIsAllRowsSelected()
                  ? true
                  : table.getIsSomeRowsSelected()
                  ? "indeterminate"
                  : false
              }
              onCheckedChange={(value) => {
                table.toggleAllRowsSelected(!!value);
              }}
            />
          </div>
        );
      },
      cell: ({ row }) => {
        return (
          <div className="">
            <Checkbox
              checked={
                row.getIsSelected()
                  ? true
                  : row.getIsSomeSelected()
                  ? "indeterminate"
                  : false
              }
              onCheckedChange={row.getToggleSelectedHandler()}
            />
          </div>
        );
      },
      size: 50,
    },
    {
      header: "S.N.",
      cell: ({ row }) => row.index + 1,
      size: 100,
    },
    {
      header: "Supplier Name",
      accessorKey: "supplier_name",
      size: 400,
    },
    {
      header: "Payee Name",
      accessorKey: "payee_name",
      size: 400,
    },
    {
      header: "Cheque Date",
      accessorKey: "cheque_date",
      size: 400,
    },
    {
      header: "Received Date",
      accessorKey: "received_date",
      size: 400,
    },
    {
      header: "Amount",
      accessorKey: "amount",
      size: 400,
    },
    {
      header: "Cheque No.",
      accessorKey: "cheque_no",
      size: 400,
    },
    {
      header: "Bank",
      accessorKey: "bank",
      size: 400,
    },
    {
      header: "Status",
      accessorKey: "status",
      size: 400,
    },
    {
      header: "Action",
      accessorKey: "action",
      cell: ({ row }) => (
        <TableAction
          edit={{
            active: true,
            onClick: (e: React.MouseEvent<HTMLButtonElement>) => {
              e.preventDefault();
              updateModal.setValue(row?.original?.id);
            },
          }}
          del={{
            active: true,
            onClick: (e: React.MouseEvent<HTMLButtonElement>) => {
              e.preventDefault();
              handleOpenDeleteModal(row?.original?.id);
            },
          }}
        />
      ),
      size: 200,
      maxSize: 200,
    },
  ];
};

export default ChequeIssuedColumn;
