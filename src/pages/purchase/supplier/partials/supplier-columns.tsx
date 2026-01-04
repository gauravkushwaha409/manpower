import { ColumnDef } from "@tanstack/react-table";
import { ISupplierListItem } from "../hooks/use-supplier-list";
import { Checkbox } from "@/components/ui/checkbox";
import TableAction from "@/components/TableAction";
import { useUpdateModal } from "@/hooks/use-update-modal";
import QUERY_PARAMS from "@/constant/query-params";
import { useDelete } from "@/hooks/useDelete";
import { endpoints } from "@/api/endpoints";
import { apiTags } from "@/constant/tag";

export const supplierData: ISupplierListItem[] = [
  {
    id: "sup-001",
    name: "Everest Trading Co.",
    address: "Kathmandu, Nepal",
    code: "EVT-1001",
    phone_no: "+977-1-5551234",
    group: "Raw Materials",
  },
  {
    id: "sup-002",
    name: "Himalayan Suppliers Pvt. Ltd.",
    address: "Lalitpur, Nepal",
    code: "HMS-2045",
    phone_no: "+977-1-5555678",
    group: "Logistics",
  },
  {
    id: "sup-003",
    name: "Annapurna Wholesale",
    address: "Pokhara, Nepal",
    code: "ANP-7789",
    phone_no: "+977-61-442211",
    group: "Wholesale",
  },
  {
    id: "sup-004",
    name: "Sagarmatha Enterprises",
    address: "Biratnagar, Nepal",
    code: "SGM-3321",
    phone_no: "+977-21-551099",
    group: "Manufacturing",
  },
  {
    id: "sup-005",
    name: "Terai Distribution Network",
    address: "Birgunj, Nepal",
    code: "TDN-9012",
    phone_no: "+977-51-534422",
    group: "Distribution",
  },
];

export default function SupplierColumns(): ColumnDef<ISupplierListItem>[] {
  const updateModal = useUpdateModal(QUERY_PARAMS.supplier.updateSupplier.key);
  const deleteModal = useDelete({
    endpoints: endpoints.supplier.delete,
    invalidates: [apiTags.supplier.list],
  });
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
      accessorKey: "name",
      size: 400,
    },
    {
      header: "Address",
      accessorKey: "address",
      size: 200,
    },
    {
      header: "Phone No.",
      accessorKey: "phone_no",
      size: 200,
    },
    {
      header: "Code",
      accessorKey: "code",
      size: 200,
    },
    {
      header: "Group",
      accessorKey: "group",
      size: 200,
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
              updateModal.handleOpenModal(row?.original?.id);
            },
          }}
          del={{
            active: true,
            onClick: (e: React.MouseEvent<HTMLButtonElement>) => {
              e.preventDefault();
              deleteModal.handleOpenModal(row?.original?.id);
            },
          }}
        />
      ),
      size: 200,
      maxSize: 200,
    },
  ];
}
