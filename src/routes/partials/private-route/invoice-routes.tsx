import { PATH } from "@/constant/path";
import Invoice from "@/pages/invoice";
import CreateInvoice from "@/pages/invoice/child/add-invoice";
import UpdateInvoice from "@/pages/invoice/child/update-invoice";

export const invoiceRoutes = [
  {
    path: PATH.invoice.index,
    element: <Invoice />,
  },
  {
    path: PATH.invoice.create,
    element: <CreateInvoice />,
  },
  {
    path: PATH.invoice.update,
    element: <UpdateInvoice />,
  },
];
