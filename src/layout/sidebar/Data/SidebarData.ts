import {
  IoCallOutline,
  IoLocationOutline,
  IoSettingsOutline,
} from "react-icons/io5";
import { LuSettings2 } from "react-icons/lu";
import { TbSeo } from "react-icons/tb";
import { ScrollText, ShoppingCart } from "lucide-react";
import { PATH } from "@/constant/path";

export const mainMenuItems = [
  {
    id: "settings",
    icon: IoSettingsOutline,
    label: "Settings",
    active: false,
    children: [
      {
        id: "locations",
        label: "Locations",
        icon: IoLocationOutline,
        // link: PATH.settings.locations.list,
      },
      {
        id: "contact-us",
        label: "Contact Us",
        icon: IoCallOutline,
        // link: PATH.settings.contactUs.list,
      },
      {
        id: "policy",
        label: "Policy",
        icon: ScrollText,
        // link: PATH.settings.policy.list,
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
        // link: PATH.settings.seo.list,
      },
    ],
  },
  {
    id: "job-process",
    icon: IoSettingsOutline,
    label: "Job Process",
    active: false,
    children: [
      {
        id: "job-categories",
        label: "Job Categories",
        icon: IoSettingsOutline,
        link: PATH.jobProcess.jobCategories,
      },
      {
        id: "job-vacancies",
        label: "Job Vacancies",
        icon: IoSettingsOutline,
        // link: PATH.jobProcess.jobVacancies.list,
      },
      {
        id: "job-applications",
        label: "Job Applications",
        icon: IoSettingsOutline,
        // link: PATH.jobProcess.jobApplications.list,
      },
      {
        id: "job-offer",
        label: "Job Offer",
        icon: IoSettingsOutline,
        // link: PATH.jobProcess.jobOffer.list,
      },
      {
        id: "interview-candidates",
        label: "Interview Candidates",
        icon: IoSettingsOutline,
        // link: PATH.jobProcess.interviewCandidates.list,
      },
    ],
  },
  {
    id: "language",
    icon: IoSettingsOutline,
    label: "Language",
    active: false,
    link: PATH.dashboard.language,
  },
];

export const deliveryAgentMenuItems = [
  {
    id: "order-management",
    icon: ShoppingCart,
    label: "Order Management",
    active: false,
    // link: PATH.orderManagement.order.list,
  },
];
