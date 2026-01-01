import { PATH } from "@/constant/path";
import QuickPayment from "@/pages/quick-payment";
import CreateQuickPayment from "@/pages/quick-payment/child/create-quick-payment";
import UpdateQuickPayment from "@/pages/quick-payment/child/update-quick-payment";

export const quickPaymentRoutes = [
  {
    path: PATH.quickPayment.index,
    element: <QuickPayment />,
  },
  {
    path: PATH.quickPayment.create,
    element: <CreateQuickPayment />,
  },
  {
    path: PATH.quickPayment.update,
    element: <UpdateQuickPayment />,
  },
];
