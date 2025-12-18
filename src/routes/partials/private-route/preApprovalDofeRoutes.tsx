import { PATH } from "@/constant/path";
import CreatePreApprovalDofe from "@/pages/preApprovalDofe/child/create/CreatePreApprovalDofe";
import UpdatePreApprovalDofe from "@/pages/preApprovalDofe/child/update/UpdatePreApprovalDofe";
import PreApprovalDofe from "@/pages/preApprovalDofe/PreApprovalDofe";

export const preApprovalDofeRoutes = [
  {
    path: PATH.preApprovalDofe.index,
    element: <PreApprovalDofe />,
  },
  {
    path: PATH.preApprovalDofe.create,
    element: <CreatePreApprovalDofe />,
  },
  {
    path: PATH.preApprovalDofe.update,
    element: <UpdatePreApprovalDofe />,
  },
];
