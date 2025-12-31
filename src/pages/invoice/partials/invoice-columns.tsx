import { ColumnDef } from "@tanstack/react-table";
import { IInvoiceListItem } from "../hooks/use-invoice-list";
import { useDelete } from "@/hooks/useDelete";
import { useUpdateModal } from "@/hooks/update-modal";
import { Checkbox } from "@/components/ui/checkbox";
import TableAction from "@/components/TableAction";

export const invoiceData: IInvoiceListItem[] = [
  {
    id: "INV-001",
    invoice_no: "INV-0001",
    candidate_name: "Aarav Sharma",
    referance_no: "REF-2025-001",
    invoice_date: "2025-01-05",
    due_date: "2025-01-15",
    currency: "USD",
    exchange_rate_to_nrp: "132.50",
    products: [
      {
        product: "Recruitment Service Fee",
        quantity: "1",
        rate: "500",
        discount: "0",
        tax: "13",
      },
      {
        product: "Documentation Processing",
        quantity: "1",
        rate: "150",
        discount: "10",
        tax: "13",
      },
    ],
  },
  {
    id: "INV-002",
    invoice_no: "INV-0002",
    candidate_name: "Sita Koirala",
    referance_no: "REF-2025-002",
    invoice_date: "2025-01-08",
    due_date: "2025-01-18",
    currency: "NPR",
    exchange_rate_to_nrp: "1",
    products: [
      {
        product: "Visa Processing Fee",
        quantity: "1",
        rate: "25000",
        discount: "0",
        tax: "0",
      },
    ],
  },
  {
    id: "INV-003",
    invoice_no: "INV-0003",
    candidate_name: "Bikash Thapa",
    referance_no: "REF-2025-003",
    invoice_date: "2025-01-10",
    due_date: "2025-01-25",
    currency: "EUR",
    exchange_rate_to_nrp: "145.20",
    products: [
      {
        product: "Medical Examination",
        quantity: "1",
        rate: "120",
        discount: "5",
        tax: "13",
      },
      {
        product: "Insurance Fee",
        quantity: "1",
        rate: "80",
        discount: "0",
        tax: "13",
      },
    ],
  },
];

const InvoiceColumns = (): ColumnDef<IInvoiceListItem>[] => {
  const { handleOpenModal: handleOpenDeleteModal } = useDelete({});
  const { handleOpenModal: handleOpenUpdateModal } = useUpdateModal();

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
      header: "Invoice No.",
      accessorKey: "invoice_no",
      size: 250,
    },
    {
      header: "Candidate Name",
      accessorKey: "candidate_name",
      size: 400,
    },
    {
      header: "Reference No",
      accessorKey: "referance_no",
      size: 400,
    },
    {
      header: "Invoice Date",
      accessorKey: "invoice_date",
      size: 200,
    },
    {
      header: "Due Date",
      accessorKey: "due_date",
      size: 200,
    },
    {
      header: "Total",
      cell: ({ row }) => {
        const total =
          row?.original?.products?.reduce((acc, product) => {
            const quantity = Number(product.quantity || 0);
            const rate = Number(product.rate || 0);
            const discount = Number(product.discount || 0);
            const tax = Number(product.tax || 0);

            const grossPrice = quantity * rate;
            const discountedPrice = grossPrice - grossPrice * (discount / 100);

            const vatAmount = discountedPrice * (tax / 100);

            return acc + discountedPrice + vatAmount;
          }, 0) ?? 0;

        return <span>{total.toFixed(2)}</span>;
      },
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
              handleOpenUpdateModal(row?.original?.id);
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

export default InvoiceColumns;
