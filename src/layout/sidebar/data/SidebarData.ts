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
import { CheckCheck, ScrollText, User2, Users2 } from "lucide-react";
import { LiaIndustrySolid } from "react-icons/lia";
import { HiOutlineLanguage, HiOutlineUserPlus } from "react-icons/hi2";
import { FaWpforms } from "react-icons/fa";
import { PiBuildingOffice } from "react-icons/pi";
import { GoOrganization } from "react-icons/go";
import { LiaCcVisa, LiaFileAlt } from "react-icons/lia";
import { GrVisa } from "react-icons/gr";
import { TiTickOutline } from "react-icons/ti";
import { TbReportMedical } from "react-icons/tb";
import { MdDashboard, MdOutlineHandshake } from "react-icons/md";
import { PATH } from "@/constant/path";

export const mainMenuItems = [
  {
    id: "dashboard",
    icon: MdDashboard,
    label: "Dashboard",
    active: false,
    link: PATH.dashboard.dashboard,
  },
  {
    id: "country",
    icon: TfiWorld,
    label: "Country",
    active: false,
    link: PATH.country.index,
  },
  {
    id: "preApprovalDofe",
    icon: CheckCheck,
    label: "Pre Approval Dofe",
    active: false,
    link: PATH.preApprovalDofe.index,
  },
  {
    id: "Job Vacancy",
    icon: CheckCheck,
    label: "Job Vacancy",
    active: false,
    link: PATH.jobVacancy.index,
  },
  {
    id: "candidate",
    icon: User2,
    label: "Candidate",
    active: false,
    link: PATH.candidate.index,
  },
  {
    id: "company",
    icon: PiBuildingOffice,
    label: "Company",
    active: false,
    link: PATH.company.index,
  },

  // {
  //   id: "enquiry",
  //   icon: FaWpforms,
  //   label: "Enquiry",
  //   active: false,
  //   link: PATH.dashboard.preApplication,
  // },
  // {
  //   id: "visa-process",
  //   icon: LiaCcVisa,
  //   label: "Visa Process",
  //   active: false,
  //   children: [
  //     {
  //       id: "employee-interview",
  //       label: "Employee Interview",
  //       icon: GoOrganization,
  //       link: PATH.visa.embassyInteview,
  //     },
  //     {
  //       id: "visa",
  //       label: "Visa",
  //       icon: GrVisa,
  //       link: PATH.visa.visa,
  //     },
  //     {
  //       id: "medical-report",
  //       label: "Medical Report",
  //       icon: TbReportMedical,
  //       link: PATH.visa.medicalReport,
  //     },
  //     {
  //       id: "orientation",
  //       label: "Orientation",
  //       icon: IoPeopleSharp,
  //       link: PATH.visa.orientation,
  //     },
  //     {
  //       id: "dofe",
  //       label: "DOFE Approval",
  //       icon: TiTickOutline,
  //       link: PATH.visa.dofe,
  //     },
  //     {
  //       id: "ticket",
  //       label: "Tickets",
  //       icon: IoTicketSharp,
  //       link: PATH.visa.ticket,
  //     },
  //   ],
  // },
  // {
  //   id: "job-process",
  //   icon: IoBriefcaseOutline,
  //   label: "Job Process",
  //   active: false,
  //   children: [
  //     {
  //       id: "job-categories",
  //       label: "Job Categories",
  //       icon: IoListOutline,
  //       link: PATH.jobProcess.jobCategories,
  //     },
  // {
  //   id: "job-vacancies",
  //   label: "Job Vacancies",
  //   icon: HiOutlineUserPlus,
  //   link: PATH.jobProcess.jobVacancies,
  // },
  //     {
  //       id: "job-applications",
  //       label: "Job Applications",
  //       icon: LiaFileAlt,
  //       link: PATH.jobProcess.jobApplications,
  //     },
  //     {
  //       id: "job-offer",
  //       label: "Job Offer",
  //       icon: MdOutlineHandshake,
  //       link: PATH.jobProcess.jobOffer,
  //     },
  //     {
  //       id: "interview-candidates",
  //       label: "Interview Candidates",
  //       icon: LuUsers,
  //       link: PATH.jobProcess.interviewCandidates,
  //     },
  // ],
  // },
  // {
  //   id: "users",
  //   icon: Users2,
  //   label: "Users",
  //   active: false,
  //   link: PATH.dashboard.users,
  // },

  // {
  //   id: "language",
  //   icon: HiOutlineLanguage,
  //   label: "Language",
  //   active: false,
  //   link: PATH.dashboard.language,
  // },
  // {
  //   id: "payment",
  //   icon: FaMoneyBillWave,
  //   label: "Payments",
  //   active: false,
  //   link: PATH.dashboard.payment,
  // },
  {
    id: "settings",
    icon: IoSettingsOutline,
    label: "Settings",
    active: false,
    children: [
      // {
      //   id: "location",
      //   label: "Location",
      //   icon: IoLocationOutline,
      //   link: PATH.settings.location,
      // },
      // {
      //   id: "contact-us",
      //   label: "Contact Us",
      //   icon: IoCallOutline,
      //   link: PATH.settings.contactUs,
      // },
      // {
      //   id: "policy",
      //   label: "Policy",
      //   icon: ScrollText,
      //   link: PATH.settings.policy,
      // },
      // {
      // id: "organization-settings",
      // label: "Organization Settings",
      // icon: LuSettings2,
      // link: PATH.settings.organizationSettings.list,
      // },
      // {
      //   id: "static-seo",
      //   label: "Notice From DOFE",
      //   icon: TbSeo,
      //   link: PATH.settings.seo,
      // },
      // {
      //   id: "license-setting",
      //   label: "License Setting",
      //   icon: TbSeo,
      //   link: PATH.settings.seo,
      // },

      {
        id: "document-setting",
        label: "Document Setting",
        icon: TbSeo,
        link: PATH.setting.documentSetting,
      },
      {
        id: "job-Setting",
        label: "Job Setting",
        icon: IoListOutline,
        children: [
          {
            id: "industry",
            icon: LiaIndustrySolid,
            label: "Industry",
            link: PATH.setting.jobSetting.industry,
          },
          {
            id: "Category",
            icon: LiaIndustrySolid,
            label: "Category",
            link: PATH.setting.jobSetting.category,
          },
          {
            id: "sub-category",
            icon: LiaIndustrySolid,
            label: "Sub Category",
            link: PATH.setting.jobSetting.subCategory,
          },
          {
            id: "job-title",
            icon: LiaIndustrySolid,
            label: "Job Title",
            link: PATH.setting.jobSetting.jobTitle,
          },
        ],
      },
      // {
      //   id: "static-seo",
      //   label: "Static SEO",
      //   icon: TbSeo,
      //   link: PATH.settings.seo,
      // },
    ],
  },
];
