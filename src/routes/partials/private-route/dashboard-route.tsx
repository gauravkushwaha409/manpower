import { PATH } from "@/constant/path";
import Payment from "@/pages/payment/Payment";
import AddPayment from "@/pages/payment/AddPayment";
import UpdatePayment from "@/pages/payment/UpdatePayment";
import ChangePassword from "@/pages/changePassword/ChangePassword";
import Notification from "@/pages/notification/Notification";
import Dashboard from "@/pages/dashboard/Dashboard";

export const dashboardRoutes = [
  {
    path: PATH.auth.changePassword,
    element: <ChangePassword />,
  },
  {
    path: PATH.dashboard.dashboard,
    element: <Dashboard />,
  },
  {
    path: PATH.dashboard.notification,
    element: <Notification />,
  },
  // payment
  {
    path: PATH.dashboard.payment,
    element: <Payment />,
  },
  {
    path: PATH.dashboard.addPayment,
    element: <AddPayment />,
  },
  {
    path: PATH.dashboard.updatePayment,
    element: <UpdatePayment />,
  },
];
