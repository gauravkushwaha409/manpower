import Layout from "@/layout";
import PrivateRouteWrapper from "./private-route-wrapper";
import PublicRouteWrapper from "./public-route-wrapper";
import { dashboardRoutes } from "./partials/private-route/dashboard-route";
import { publicRoutes } from "./partials/public-route";
import { preApprovalDofeRoutes } from "./partials/private-route/preApprovalDofeRoutes";
import { companyRoutes } from "./partials/private-route/company-routes";
import { candidateRoutes } from "./partials/private-route/candidate-routes";
import { settingRoutes } from "./partials/private-route/setting-routes";
import { jobVacancyRoutes } from "./partials/private-route/job-vacancy";

/**
 * MainRoutes defines the routing configuration for the application.
 * It separates routes into private (authenticated) and public (unauthenticated) routes.
 */

const MainRoutes = [
  {
    // Root path "/" uses PrivateRouteWrapper to protect dashboard and private pages
    path: "/",
    element: (
      <PrivateRouteWrapper>
        <Layout />
      </PrivateRouteWrapper>
    ),
    children: [
      ...dashboardRoutes,
      ...preApprovalDofeRoutes,
      ...companyRoutes,
      ...candidateRoutes,
      ...jobVacancyRoutes,
      ...settingRoutes,
    ],
  },

  {
    // Public routes wrapper: accessible only to unauthenticated users
    element: <PublicRouteWrapper />,
    children: [...publicRoutes],
  },
];

export default MainRoutes;
