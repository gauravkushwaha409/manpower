import { CustomColumnDef } from "@/components/Table";
import { IPayment } from "../interface/IPayment";
import PaymentActions from "./PaymentActions";

export const PaymentColumns: CustomColumnDef<IPayment>[] = [
  {
    header: "Name",
    accessorKey: "candidateName",
  },
  {
    header: "Country",
    accessorKey: "country",
  },
  {
    header: "Payment",
    accessorKey: "payment",
  },
  {
    header: "Payment Purpose",
    accessorKey: "payment_for",
  },
  {
    header: "Payment Method",
    accessorKey: "payment_method",
  },  
  {
    header: "Total Payment",
    accessorKey: "total_payment",
  },
  {
    header: "Action",
    accessorKey: "action",

    cell: ({ row }) => <PaymentActions row={row?.original} />,
  },
];
