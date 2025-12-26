import { PATH } from "@/constant/path";
import CreatePreApprovalDofe from "@/pages/preApprovalDofe/child/create/create-pre-approval-dofe";
import UpdatePreApprovalDofe from "@/pages/preApprovalDofe/child/update/update-pre-approval-dofe";
import PreApprovalDofe from "@/pages/preApprovalDofe/pre-approval-dofe";

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
