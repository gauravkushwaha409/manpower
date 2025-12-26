import { PATH } from "@/constant/path";
import CreateCompany from "@/pages/company/child/create/create-company";
import UpdateCompany from "@/pages/company/child/update/update-company";
import Company from "@/pages/company/Company";

export const companyRoutes = [
  {
    path: PATH.company.index,
    element: <Company />,
  },
  {
    path: PATH.company.create,
    element: <CreateCompany />,
  },
  {
    path: PATH.company.update,
    element: <UpdateCompany />,
  },
];
