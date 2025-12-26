import { PATH } from "@/constant/path";
import JobOffer from "@/pages/jobs/jobOffer/JobOffer";
import JobInterview from "@/pages/jobs/jobsInterview/JobInterview";
import EmbassyInterview from "@/pages/visaProcess/embassyInterview/EmbassyInterview";
import MedicalReport from "@/pages/visaProcess/medicalReport/MedicalReport";
import Orientation from "@/pages/visaProcess/orientation/Orientation";
import Ticket from "@/pages/visaProcess/ticket/Ticket";
import Visa from "@/pages/visaProcess/visa/Visa";
import AddEmbassyInterview from "@/pages/visaProcess/embassyInterview/AddEmbassyInterview";
import UpdateEmbassyInterview from "@/pages/visaProcess/embassyInterview/UpdateEmbassyInterview";
import AddVisa from "@/pages/visaProcess/visa/AddVisa";
import UpdateVisa from "@/pages/visaProcess/visa/UpdateVisa";
import AddMedicalReport from "@/pages/visaProcess/medicalReport/AddMedicalReport";
import UpdateMedicalReport from "@/pages/visaProcess/medicalReport/UpdateMedicalReport";
import AddOrientation from "@/pages/visaProcess/orientation/AddOrientation";
import UpdateOrientation from "@/pages/visaProcess/orientation/UpdateOrientation";
import AddTicket from "@/pages/visaProcess/ticket/AddTicket";
import UpdateTicket from "@/pages/visaProcess/ticket/UpdateTicket";
import AddJobOffer from "@/pages/jobs/jobOffer/AddJobOffer";
import UpdateJobOffer from "@/pages/jobs/jobOffer/UpdateJobOffer";
import AddJobInterview from "@/pages/jobs/jobsInterview/AddJobInterview";
import UpdateJobInterview from "@/pages/jobs/jobsInterview/UpdateJobInterview";
import User from "@/pages/users/User";
import AddUser from "@/pages/users/AddUser";
import UpdateUser from "@/pages/users/UpdateUser";
import Payment from "@/pages/payment/Payment";
import AddPayment from "@/pages/payment/AddPayment";
import UpdatePayment from "@/pages/payment/UpdatePayment";
import ChangePassword from "@/pages/changePassword/ChangePassword";
import Notification from "@/pages/notification/Notification";
import Dashboard from "@/pages/dashboard/Dashboard";

export const dashboardRoutes = [
  {
    path: PATH.auth.changePassword,
    element: <ChangePassword />,
  },
  {
    path: PATH.dashboard.dashboard,
    element: <Dashboard />,
  },
  {
    path: PATH.dashboard.notification,
    element: <Notification />,
  },
  // payment
  {
    path: PATH.dashboard.payment,
    element: <Payment />,
  },
  {
    path: PATH.dashboard.addPayment,
    element: <AddPayment />,
  },
  {
    path: PATH.dashboard.updatePayment,
    element: <UpdatePayment />,
  },

  // user
  {
    path: PATH.dashboard.users,
    element: <User />,
  },
  {
    path: PATH.dashboard.addUser,
    element: <AddUser />,
  },
  {
    path: PATH.dashboard.updateUser,
    element: <UpdateUser />,
  },

  // job process
  {
    path: PATH.jobProcess.jobOffer,
    element: <JobOffer />,
  },
  {
    path: PATH.jobProcess.addJobOffer,
    element: <AddJobOffer />,
  },
  {
    path: PATH.jobProcess.updateJobOffer,
    element: <UpdateJobOffer />,
  },
  {
    path: PATH.jobProcess.interviewCandidates,
    element: <JobInterview />,
  },
  {
    path: PATH.jobProcess.addInterviewCandidates,
    element: <AddJobInterview />,
  },
  {
    path: PATH.jobProcess.updateInterviewCandidates,
    element: <UpdateJobInterview />,
  },

  // visa process
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
    path: PATH.visa.addVisa,
    element: <AddVisa />,
  },
  {
    path: PATH.visa.updateVisa,
    element: <UpdateVisa />,
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
    path: PATH.visa.addMedicalReport,
    element: <AddMedicalReport />,
  },
  {
    path: PATH.visa.updateMedicalReport,
    element: <UpdateMedicalReport />,
  },
  {
    path: PATH.visa.orientation,
    element: <Orientation />,
  },
  {
    path: PATH.visa.addOrientation,
    element: <AddOrientation />,
  },
  {
    path: PATH.visa.updateOrientation,
    element: <UpdateOrientation />,
  },
  {
    path: PATH.visa.ticket,
    element: <Ticket />,
  },
  {
    path: PATH.visa.addTicket,
    element: <AddTicket />,
  },
  {
    path: PATH.visa.updateTicket,
    element: <UpdateTicket />,
  },

  // settings
  // {
  //   path: PATH.settings.location,
  //   element: <Location />,
  // },
  // {
  //   path: PATH.settings.addLocation,
  //   element: <AddLocation />,
  // },
  // {
  //   path: PATH.settings.updateLocation,
  //   element: <UpdateLocation />,
  // },
  // {
  //   path: PATH.settings.contactUs,
  //   element: <ContactUs />,
  // },
  // {
  //   path: PATH.settings.addContactUs,
  //   element: <AddContactUs />,
  // },
  // {
  //   path: PATH.settings.updateContactUs,
  //   element: <UpdateContactUs />,
  // },
  // {
  //   path: PATH.settings.policy,
  //   element: <Policy />,
  // },
  // {
  //   path: PATH.settings.addPolicy,
  //   element: <AddPolicy />,
  // },
  // {
  //   path: PATH.settings.updatePolicy,
  //   element: <UpdatePolicy />,
  // },
  // {
  //   path: PATH.settings.seo,
  //   element: <Seo />,
  // },
  // {
  //   path: PATH.settings.addSeo,
  //   element: <AddSeo />,
  // },
  // {
  //   path: PATH.settings.updateSeo,
  //   element: <UpdateSeo />,
  // },
];
