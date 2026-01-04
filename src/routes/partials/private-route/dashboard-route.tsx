import { PATH } from "@/constant/path";
import ChangePassword from "@/pages/changePassword/ChangePassword";
import Dashboard from "@/pages/dashboard/Dashboard";
import User from "@/pages/user";

export const dashboardRoutes = [
  {
    path: PATH.auth.changePassword,
    element: <ChangePassword />,
  },
  {
    path: PATH.dashboard.dashboard,
    element: <Dashboard />,
  },
  //
  {
    path: PATH.user.index,
    element: <User />,
  },
];
