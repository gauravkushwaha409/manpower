import { PATH } from "@/constant/path";
import ChangePassword from "@/pages/changePassword/ChangePassword";
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
];
