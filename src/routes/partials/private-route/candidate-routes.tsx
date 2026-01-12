import { PATH } from "@/constant/path";
import { lazy } from "react";

const Candidate = lazy(() => import("@/pages/candidate"));
const CreateCandidate = lazy(() => import("@/pages/candidate/child/create/CreateCandidate"));
const UpdateCandidate = lazy(() => import("@/pages/candidate/child/update/UpdateCandidate"));

export const candidateRoutes = [
  {
    path: PATH.candidate.index,
    element: <Candidate />,
  },
  {
    path: PATH.candidate.create,
    element: <CreateCandidate />,
  },
  {
    path: PATH.candidate.update,
    element: <UpdateCandidate />,
  },
];

