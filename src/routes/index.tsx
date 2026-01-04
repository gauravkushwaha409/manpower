import Layout from "@/layout";
import PrivateRouteWrapper from "./private-route-wrapper";
import PublicRouteWrapper from "./public-route-wrapper";
import { dashboardRoutes } from "./partials/private-route/dashboard-route";
import { publicRoutes } from "./partials/public-route";
import { preApprovalDofeRoutes } from "./partials/private-route/preApprovalDofeRoutes";
import { companyRoutes } from "./partials/private-route/company-routes";
import { candidateRoutes } from "./partials/private-route/candidate-routes";
import { settingRoutes } from "./partials/private-route/setting-routes";
import { jobVacancyRoutes } from "./partials/private-route/job-vacancy-routes";
import { countryRoutes } from "./partials/private-route/country-routes";
import { interviewRoutes } from "./partials/private-route/interview-routes";
import { jobOfferRoutes } from "./partials/private-route/job-offer-routes";
import { medicalRoutes } from "./partials/private-route/medical-routes";
import { visaRoutes } from "./partials/private-route/visa-routes";
import { orientationRoutes } from "./partials/private-route/orientation-routes";
import { shramRoutes } from "./partials/private-route/shram-routes";
import { ticketRoutes } from "./partials/private-route/ticket-routes";
import { insuranceRoutes } from "./partials/private-route/insurance-routes";
import { invoiceRoutes } from "./partials/private-route/invoice-routes";
import { quickPaymentRoutes } from "./partials/private-route/quick-payment-routes";
import { chartOfAccountRoutes } from "./partials/private-route/chart-of-account-routes";
import { chequeRegistered } from "./partials/private-route/cheque-register-routes";
import { accountingRoutes } from "./partials/private-route/accounting-routes";

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
      ...countryRoutes,
      ...companyRoutes,
      ...preApprovalDofeRoutes,
      ...jobVacancyRoutes,
      ...candidateRoutes,
      ...interviewRoutes,
      ...jobOfferRoutes,
      ...medicalRoutes,
      ...visaRoutes,
      ...orientationRoutes,
      ...insuranceRoutes,
      ...shramRoutes,
      ...ticketRoutes,
      ...invoiceRoutes,
      ...quickPaymentRoutes,
      ...chartOfAccountRoutes,
      ...chequeRegistered,
      ...settingRoutes,
      ...accountingRoutes,
    ],
  },

  {
    // Public routes wrapper: accessible only to unauthenticated users
    element: <PublicRouteWrapper />,
    children: [...publicRoutes],
  },
];

export default MainRoutes;
