import { ColumnDef } from "@tanstack/react-table";
import { IChequeReceivedListItem } from "../hooks/use-cheque-received-list";
import { Checkbox } from "@/components/ui/checkbox";
import TableAction from "@/components/TableAction";
import { useDelete } from "@/hooks/useDelete";
import { endpoints } from "@/api/endpoints";
import { apiTags } from "@/constant/tag";
import { useQueryParamState } from "@/hooks/useQueryParamState";
import QUERY_PARAMS from "@/constant/query-params";

export const chequeReceivedData: IChequeReceivedListItem[] = [
  {
    id: "1",
    customer_name: "ABC Enterprises",
    cheque_date: "2025-01-04",
    received_date: "2025-01-05",
    amount: "125000",
    cheque_no: "CR-CHK-1001",
    bank: "Nabil Bank",
    status: "pending",
  },
  {
    id: "2",
    customer_name: "Himalayan Traders",
    cheque_date: "2025-01-02",
    received_date: "2025-01-03",
    amount: "340000",
    cheque_no: "CR-CHK-1002",
    bank: "Global IME Bank",
    status: "deposited",
  },
  {
    id: "3",
    customer_name: "Kathmandu Retailers",
    cheque_date: "2024-12-30",
    received_date: "2024-12-31",
    amount: "98000",
    cheque_no: "CR-CHK-1003",
    bank: "NIC Asia Bank",
    status: "cleared",
  },
  {
    id: "4",
    customer_name: "Pokhara Distributors",
    cheque_date: "2024-12-25",
    received_date: "2024-12-27",
    amount: "215000",
    cheque_no: "CR-CHK-1004",
    bank: "Prabhu Bank",
    status: "bounced",
  },
  {
    id: "5",
    customer_name: "Lalitpur Supplies",
    cheque_date: "2024-12-20",
    received_date: "2024-12-21",
    amount: "160000",
    cheque_no: "CR-CHK-1005",
    bank: "Nepal Investment Bank",
    status: "cancelled",
  },
];

const ChequeReceivedColumn = (): ColumnDef<IChequeReceivedListItem>[] => {
  const { handleOpenModal: handleOpenDeleteModal } = useDelete({
    endpoints: endpoints?.chequeReceived.delete,
    invalidates: [apiTags.chequeRegister.chequeReceived.list],
  });
  const updateModal = useQueryParamState(
    QUERY_PARAMS.chequeRegister.chequeReceived.updateChequeReceived.key
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
      header: "Customer Name",
      accessorKey: "customer_name",
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

export default ChequeReceivedColumn;
