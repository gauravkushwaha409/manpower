import {
  IoCallOutline,
  IoLocationOutline,
  IoSettingsOutline,
} from "react-icons/io5";
import { LuSettings2 } from "react-icons/lu";
import { TbSeo } from "react-icons/tb";
import { TfiWorld } from "react-icons/tfi";
import { IoPeopleSharp, IoTicketSharp } from "react-icons/io5";
import { FcApproval } from "react-icons/fc";
import { ScrollText, ShoppingCart } from "lucide-react";
import { GoOrganization } from "react-icons/go";
import { LiaCcVisa } from "react-icons/lia";
import { GrVisa } from "react-icons/gr";
import { TbReportMedical } from "react-icons/tb";
import { PATH } from "@/constant/path";

export const mainMenuItems = [
  {
    id: "visa",
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
        icon: FcApproval,
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
    id: "country",
    icon: TfiWorld,
    label: "Country",
    active: false,
    link: PATH.dashboard.country,
  },
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
