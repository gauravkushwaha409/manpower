import { PATH } from "@/constant/path";
import Invoice from "@/pages/invoice";

export const invoiceRoutes = [
  {
    path: PATH.invoice.index,
    element: <Invoice />,
  },
];
