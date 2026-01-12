import { PATH } from "@/constant/path";
import { lazy } from "react";

const CreateJobVacancy = lazy(() => import("@/pages/job-vacancy/child/create/create-job-vacancy"));
const UpdateJobVacancy = lazy(() => import("@/pages/job-vacancy/child/update/update-job-vacancy"));
const JobVacancy = lazy(() => import("@/pages/job-vacancy/index.tsx"));

export const jobVacancyRoutes = [
  {
    path: PATH.jobVacancy.index,
    element: <JobVacancy />,
  },
  {
    path: PATH.jobVacancy.create,
    element: <CreateJobVacancy />,
  },
  {
    path: PATH.jobVacancy.update,
    element: <UpdateJobVacancy />,
  },
];

