import { PATH } from "@/constant/path";
import Candidate from "@/pages/candidate/Candidate";
import CreateCandidate from "@/pages/candidate/child/create/CreateCandidate";
import UpdateCandidate from "@/pages/candidate/child/update/UpdateCandidate";

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
