import { PATH } from "@/constant/path";
import JobApplicant from "@/pages/jobs/jobApplicant/JobApplicant";
import JobCategory from "@/pages/jobs/jobCategory/JobCategory";
import JobOffer from "@/pages/jobs/jobOffer/JobOffer";
import JobInterview from "@/pages/jobs/jobsInterview/JobInterview";
import JobVacancies from "@/pages/jobs/jobVacancies/JobVacancies";
import Language from "@/pages/language/Language";

export const dashboardRoutes = [
  {
    path: PATH.dashboard.dashboard,
    element: "This is layout ",
  },
  {
    path: PATH.dashboard.language,
    element: <Language />,
  },
  {
    path: PATH.jobProcess.jobCategories,
    element: <JobCategory />,
  },
  {
    path: PATH.jobProcess.jobVacancies,
    element: <JobVacancies />,
  },
  {
    path: PATH.jobProcess.jobApplications,
    element: <JobApplicant />,
  },
  {
    path: PATH.jobProcess.jobOffer,
    element: <JobOffer />,
  },
  {
    path: PATH.jobProcess.interviewCandidates,
    element: <JobInterview />,
  },
];
