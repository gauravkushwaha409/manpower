import { PATH } from "@/constant/path";
import ChartOfAccount from "@/pages/chart-of-account/chart-of-account";
import ChartOfGroup from "@/pages/chart-of-account/chart-of-group";

export const chartOfAccountRoutes = [
  {
    path: PATH.chartOfAccount.account.index,
    element: <ChartOfAccount />,
  },
  {
    path: PATH.chartOfAccount.group.index,
    element: <ChartOfGroup />,
  },
];
