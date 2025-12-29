import { PATH } from "@/constant/path";
import CreateJobVacancy from "@/pages/job-vacancy/child/create/create-job-vacancy";
import UpdateJobVacancy from "@/pages/job-vacancy/child/update/update-job-vacancy";
import JobVacancy from "@/pages/job-vacancy/index.tsx";

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
