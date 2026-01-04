import { IoSettingsOutline, IoListOutline } from "react-icons/io5";
import { TbSeo } from "react-icons/tb";
import { TfiWorld } from "react-icons/tfi";
import { CheckCheck, User2, AirVent, UserMinus2Icon } from "lucide-react";
import { LiaIndustrySolid } from "react-icons/lia";
import { PiBuildingOffice } from "react-icons/pi";
import { MdDashboard } from "react-icons/md";
import { PATH } from "@/constant/path";
import { IconType } from "react-icons";

export interface MenuItem {
  id: string;
  icon?: IconType;
  link?: string;
  label: string;
  active?: boolean;
  children?: MenuItem[];
  showArrow?: boolean;
}

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
    id: "recruitment-process",
    icon: MdDashboard,
    label: "Recruitment Process",
    active: false,
    children: [
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
        id: "insurance",
        icon: User2,
        label: "Insurance",
        active: false,
        link: PATH.insurance.index,
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
    ],
  },
  {
    id: "accounting",
    icon: User2,
    label: "Accounting",
    active: false,
    children: [
      {
        id: "purchase",
        icon: User2,
        label: "Purchase",
        active: false,
        children: [
          {
            id: "expense",
            icon: User2,
            label: "Expense",
            active: false,
            link: PATH.accounting.purchase.expense.index,
          },
          {
            id: "supplier",
            icon: AirVent,
            label: "Supplier",
            active: false,
            link: PATH.accounting.purchase.supplier.index,
          },
        ],
      },
      {
        id: "sales",
        icon: User2,
        label: "Sales",
        active: false,
        children: [
          {
            id: "invoice",
            icon: User2,
            label: "Invoice",
            active: false,
            link: PATH.invoice.index,
          },
        ],
      },
      {
        id: "quick-payment",
        icon: User2,
        label: "Quick Payment",
        active: false,
        link: PATH.quickPayment.index,
      },
      {
        id: "chart-of-account",
        icon: User2,
        label: "Chart Of Account",
        active: false,
        children: [
          {
            id: "chart-of-account-account",
            label: "Account",
            icon: TbSeo,
            link: PATH.chartOfAccount.account.index,
          },
          {
            id: "chart-of-account-group",
            label: "Group",
            icon: TbSeo,
            link: PATH.chartOfAccount.group.index,
          },
        ],
      },
      {
        id: "cheque-register",
        icon: User2,
        label: "Cheque Register",
        active: false,
        children: [
          {
            id: "cheque-received",
            label: "Cheque Received",
            icon: TbSeo,
            link: PATH.chequeRegister.chequeReceived.index,
          },
          {
            id: "cheque-issued",
            label: "Cheque Issued",
            icon: TbSeo,
            link: PATH.chequeRegister.chequeIssued.index,
          },
        ],
      },
    ],
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
        id: "insurance-setting",
        label: "Insurance Comapany",
        icon: TbSeo,
        link: PATH.setting.documentSetting,
      },
      {
        id: "orientation-setting",
        label: "Orientation Institute",
        icon: TbSeo,
        link: PATH.setting.documentSetting,
      },
      {
        id: "medical-setting",
        label: "Medical Institute",
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

  {
    id: "my-subscription",
    icon: User2,
    label: "My Subscription",
    active: false,
    // link: PATH.ticket.index,
    link: PATH.orientation.index,
  },
  {
    id: "my-membership",
    icon: User2,
    label: "My Membership",
    active: false,
    // link: PATH.ticket.index,
    link: PATH.orientation.index,
  },
  {
    id: "account",
    icon: User2,
    label: "Account",
    active: false,
    // link: PATH.ticket.index,
    link: PATH.orientation.index,
  },
  {
    id: "user",
    icon: UserMinus2Icon,
    label: "User",
    active: false,
    link: PATH.user.index,
  },
];
