import { PATH } from "@/constant/path";
import Country from "@/pages/country/Country";
import Dofe from "@/pages/visaProcess/dofe/DOFE";
import EmbassyInterview from "@/pages/visaProcess/embassyInterview/EmbassyInterview";
import MedicalReport from "@/pages/visaProcess/medicalReport/MedicalReport";
import Orientation from "@/pages/visaProcess/orientation/Orientation";
import Ticket from "@/pages/visaProcess/ticket/Ticket";
import Visa from "@/pages/visaProcess/visa/Visa";

export const dashboardRoutes = [
  {
    path: PATH.dashboard.dashboard,
    element: "This is layout ",
  },
  {
    path: PATH.dashboard.country,
    element: <Country />,
  },
  {
    path: PATH.visa.embassyInteview,
    element: <EmbassyInterview />,
  },
  {
    path: PATH.visa.visa,
    element: <Visa />,
  },
  {
    path: PATH.visa.medicalReport,
    element: <MedicalReport />,
  },
  {
    path: PATH.visa.orientation,
    element: <Orientation />,
  },
  {
    path: PATH.visa.dofe,
    element: <Dofe />,
  },
  {
    path: PATH.visa.ticket,
    element: <Ticket />,
  },
];
