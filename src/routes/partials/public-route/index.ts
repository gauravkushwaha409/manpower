import { PATH } from "@/constant/path";
import Country from "@/pages/country/Country";

export const publicRoutes = [
  { path: PATH.auth.login, element: "Hello" },
  {
    path: PATH.dashboard.country,
    element: Country,
  },
];
