import {
  IoCallOutline,
  IoLocationOutline,
  IoSettingsOutline,
  IoBriefcaseOutline,
  IoListOutline,
} from "react-icons/io5";
import { LuSettings2, LuUsers } from "react-icons/lu";
import { TbSeo } from "react-icons/tb";
import { TfiWorld } from "react-icons/tfi";
import { IoPeopleSharp, IoTicketSharp } from "react-icons/io5";
import { ScrollText } from "lucide-react";
import { LiaIndustrySolid } from "react-icons/lia";
import { HiOutlineLanguage, HiOutlineUserPlus } from "react-icons/hi2";
import { FaWpforms } from "react-icons/fa";
import { PiBuildingOffice } from "react-icons/pi";
import { GoOrganization } from "react-icons/go";
import { LiaCcVisa, LiaFileAlt } from "react-icons/lia";
import { GrVisa } from "react-icons/gr";
import { TiTickOutline } from "react-icons/ti";
import { TbReportMedical } from "react-icons/tb";
import { MdOutlineHandshake } from "react-icons/md";
import { PATH } from "@/constant/path";

export const mainMenuItems = [
  {
    id: "industry",
    icon: LiaIndustrySolid,
    label: "Industry",
    active: false,
    link: PATH.dashboard.industry,
  },
  {
    id: "company",
    icon: PiBuildingOffice,
    label: "Company",
    active: false,
    link: PATH.dashboard.company,
  },
  {
    id: "pre-application",
    icon: FaWpforms,
    label: "Pre Application",
    active: false,
    link: PATH.dashboard.preApplication,
  },
  {
    id: "visa-process",
    icon: LiaCcVisa,
    label: "Visa Process",
    active: false,
    children: [
      {
        id: "employee-interview",
        label: "Employee Interview",
        icon: GoOrganization,
        link: PATH.visa.embassyInteview,
      },
      {
        id: "visa",
        label: "Visa",
        icon: GrVisa,
        link: PATH.visa.visa,
      },
      {
        id: "medical-report",
        label: "Medical Report",
        icon: TbReportMedical,
        link: PATH.visa.medicalReport,
      },
      {
        id: "orientation",
        label: "Orientation",
        icon: IoPeopleSharp,
        link: PATH.visa.orientation,
      },
      {
        id: "dofe",
        label: "DOFE Approval",
        icon: TiTickOutline,
        link: PATH.visa.dofe,
      },
      {
        id: "ticket",
        label: "Tickets",
        icon: IoTicketSharp,
        link: PATH.visa.ticket,
      },
    ],
  },
  {
    id: "job-process",
    icon: IoBriefcaseOutline,
    label: "Job Process",
    active: false,
    children: [
      {
        id: "job-categories",
        label: "Job Categories",
        icon: IoListOutline,
        link: PATH.jobProcess.jobCategories,
      },
      {
        id: "job-vacancies",
        label: "Job Vacancies",
        icon: HiOutlineUserPlus,
        link: PATH.jobProcess.jobVacancies,
      },
      {
        id: "job-applications",
        label: "Job Applications",
        icon: LiaFileAlt,
        link: PATH.jobProcess.jobApplications,
      },
      {
        id: "job-offer",
        label: "Job Offer",
        icon: MdOutlineHandshake,
        link: PATH.jobProcess.jobOffer,
      },
      {
        id: "interview-candidates",
        label: "Interview Candidates",
        icon: LuUsers,
        link: PATH.jobProcess.interviewCandidates,
      },
    ],
  },
  {
    id: "country",
    icon: TfiWorld,
    label: "Country",
    active: false,
    link: PATH.dashboard.country,
  },
  {
    id: "language",
    icon: HiOutlineLanguage,
    label: "Language",
    active: false,
    link: PATH.dashboard.language,
  },
  {
    id: "settings",
    icon: IoSettingsOutline,
    label: "Settings",
    active: false,
    children: [
      {
        id: "location",
        label: "Location",
        icon: IoLocationOutline,
        link: PATH.settings.location,
      },
      {
        id: "contact-us",
        label: "Contact Us",
        icon: IoCallOutline,
        link: PATH.settings.contactUs,
      },
      {
        id: "policy",
        label: "Policy",
        icon: ScrollText,
        link: PATH.settings.policy,
      },
      {
        id: "organization-settings",
        label: "Organization Settings",
        icon: LuSettings2,
        // link: PATH.settings.organizationSettings.list,
      },
      {
        id: "static-seo",
        label: "Static SEO",
        icon: TbSeo,
        link: PATH.settings.seo,
      },
    ],
  },
];
