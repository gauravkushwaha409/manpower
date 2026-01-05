import { PATH } from "@/constant/path";
import ChangePassword from "@/pages/changePassword/ChangePassword";
import Dashboard from "@/pages/dashboard/Dashboard";
import ModuleManagement from "@/pages/role-permission/module-management";
import Permission from "@/pages/role-permission/permission";
import Role from "@/pages/role-permission/role";
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
  // Role, Permission and Module Management
  {
    path: PATH.roleAndPermission.role,
    element: <Role />,
  },
  {
    path: PATH.roleAndPermission.permission,
    element: <Permission />,
  },
  {
    path: PATH.roleAndPermission.moduleManagement,
    element: <ModuleManagement />,
  },
];
