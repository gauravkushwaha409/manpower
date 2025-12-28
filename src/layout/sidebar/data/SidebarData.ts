import { IoSettingsOutline, IoListOutline } from "react-icons/io5";
import { TbSeo } from "react-icons/tb";
import { TfiWorld } from "react-icons/tfi";
import { CheckCheck, User2 } from "lucide-react";
import { LiaIndustrySolid } from "react-icons/lia";
import { PiBuildingOffice } from "react-icons/pi";
import { MdDashboard } from "react-icons/md";
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
    id: "company",
    icon: PiBuildingOffice,
    label: "Company",
    active: false,
    link: PATH.company.index,
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
    id: "interview",
    icon: User2,
    label: "Interview",
    active: false,
    link: PATH.interview.index,
  },
  {
    id: "job-offer",
    icon: User2,
    label: "Job Offer",
    active: false,
    link: PATH.jobOffer.index,
  },
  {
    id: "medical",
    icon: User2,
    label: "Medical",
    active: false,
    link: PATH.medical.index,
  },
  {
    id: "visa",
    icon: User2,
    label: "Visa",
    active: false,
    link: PATH.visa.index,
  },
  {
    id: "orientation",
    icon: User2,
    label: "Orientation",
    active: false,
    link: PATH.orientation.index,
  },
  {
    id: "shram",
    icon: User2,
    label: "Shram",
    active: false,
    link: PATH.shram.index,
  },
  {
    id: "ticket",
    icon: User2,
    label: "Ticket",
    active: false,
    link: PATH.ticket.index,
  },
  {
    id: "settings",
    icon: IoSettingsOutline,
    label: "Settings",
    active: false,
    children: [
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
    ],
  },
];
