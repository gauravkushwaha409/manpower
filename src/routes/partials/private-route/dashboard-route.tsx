import { PATH } from '@/constant/path';
import JobApplicant from '@/pages/jobs/jobApplicant/JobApplicant';
import JobCategory from '@/pages/jobs/jobCategory/JobCategory';
import JobOffer from '@/pages/jobs/jobOffer/JobOffer';
import JobInterview from '@/pages/jobs/jobsInterview/JobInterview';
import JobVacancies from '@/pages/jobs/jobVacancies/JobVacancies';
import Language from '@/pages/language/Language';
import Country from '@/pages/country/Country';
import Dofe from '@/pages/visaProcess/dofe/DOFE';
import EmbassyInterview from '@/pages/visaProcess/embassyInterview/EmbassyInterview';
import MedicalReport from '@/pages/visaProcess/medicalReport/MedicalReport';
import Orientation from '@/pages/visaProcess/orientation/Orientation';
import Ticket from '@/pages/visaProcess/ticket/Ticket';
import Visa from '@/pages/visaProcess/visa/Visa';
import AddEmbassyInterview from '@/pages/visaProcess/embassyInterview/AddEmbassyInterview';
import UpdateEmbassyInterview from '@/pages/visaProcess/embassyInterview/UpdateEmbassyInterview';

export const dashboardRoutes = [
  {
    path: PATH.dashboard.dashboard,
    element: 'This is layout ',
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
  {
    path: PATH.dashboard.country,
    element: <Country />,
  },
  {
    path: PATH.visa.embassyInteview,
    element: <EmbassyInterview />,
  },
  {
    path: PATH.visa.addembassyInterview,
    element: <AddEmbassyInterview />,
  },
  {
    path: PATH.visa.updateembassyInterview,
    element: <UpdateEmbassyInterview />,
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
