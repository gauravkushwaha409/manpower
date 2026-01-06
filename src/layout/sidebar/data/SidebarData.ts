import {
  IoSettingsOutline,
  IoListOutline,
  IoHammerOutline,
} from "react-icons/io5";
import { TbSeo } from "react-icons/tb";
import { TfiWorld } from "react-icons/tfi";
import {
  CheckCheck,
  User2,
  AirVent,
  UserMinus2Icon,
  AlignCenterVerticalIcon,
} from "lucide-react";
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
  children?: MenuItem[];
}

export const mainMenuItems: MenuItem[] = [
  {
    id: "dashboard",
    icon: MdDashboard,
    label: "Dashboard",
    link: PATH.dashboard.dashboard,
  },
  {
    id: "country",
    icon: TfiWorld,
    label: "Country",
    link: PATH.country.index,
  },
  {
    id: "recruitment-process",
    icon: MdDashboard,
    label: "Recruitment Process",
    children: [
      {
        id: "company",
        icon: PiBuildingOffice,
        label: "Company",
        link: PATH.company.index,
      },
      {
        id: "preApprovalDofe",
        icon: CheckCheck,
        label: "Pre Approval Dofe",
        link: PATH.preApprovalDofe.index,
      },
      {
        id: "Job Vacancy",
        icon: CheckCheck,
        label: "Job Vacancy",
        link: PATH.jobVacancy.index,
      },
      {
        id: "candidate",
        icon: User2,
        label: "Candidate",
        link: PATH.candidate.index,
      },
      {
        id: "interview",
        icon: User2,
        label: "Interview",
        link: PATH.interview.index,
      },
      {
        id: "job-offer",
        icon: User2,
        label: "Job Offer",
        link: PATH.jobOffer.index,
      },
      {
        id: "medical",
        icon: User2,
        label: "Medical",
        link: PATH.medical.index,
      },
      {
        id: "visa",
        icon: User2,
        label: "Visa",
        link: PATH.visa.index,
      },
      {
        id: "orientation",
        icon: User2,
        label: "Orientation",
        link: PATH.orientation.index,
      },
      {
        id: "insurance",
        icon: User2,
        label: "Insurance",
        link: PATH.insurance.index,
      },
      {
        id: "shram",
        icon: User2,
        label: "Shram",
        link: PATH.shram.index,
      },
      {
        id: "ticket",
        icon: User2,
        label: "Ticket",
        link: PATH.ticket.index,
      },
    ],
  },
  {
    id: "accounting",
    icon: User2,
    label: "Accounting",
    children: [
      {
        id: "purchase",
        icon: User2,
        label: "Purchase",
        children: [
          {
            id: "expense",
            icon: User2,
            label: "Expense",
            link: PATH.accounting.purchase.expense.index,
          },
          {
            id: "supplier",
            icon: AirVent,
            label: "Supplier",
            link: PATH.accounting.purchase.supplier.index,
          },
        ],
      },
      {
        id: "sales",
        icon: User2,
        label: "Sales",
        children: [
          {
            id: "invoice",
            icon: User2,
            label: "Invoice",
            link: PATH.invoice.index,
          },
        ],
      },
      {
        id: "quick-payment",
        icon: User2,
        label: "Quick Payment",
        link: PATH.quickPayment.index,
      },
      {
        id: "chart-of-account",
        icon: User2,
        label: "Chart Of Account",
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
        link: PATH.accounting.chequeRegister.index,
        children: [
          {
            id: "cheque-received",
            label: "Cheque Received",
            icon: IoHammerOutline,
            link: PATH.accounting.chequeRegister.chequeReceived.index,
          },
          {
            id: "cheque-issued",
            label: "Cheque Issued",
            icon: AlignCenterVerticalIcon,
            link: PATH.accounting.chequeRegister.chequeIssued.index,
          },
        ],
      },
    ],
  },

  {
    id: "settings",
    icon: IoSettingsOutline,
    label: "Settings",
    children: [
      {
        id: "document-setting",
        label: "Document Setting",
        icon: TbSeo,
        link: PATH.setting.documentSetting,
      },
      {
        id: "insurance-setting",
        label: "Insurance Company",
        icon: TbSeo,
        link: PATH.setting.insuranceCompany,
      },
      {
        id: "orientation-setting",
        label: "Orientation Institute",
        icon: TbSeo,
        link: PATH.setting.orientationInstitute,
      },
      {
        id: "medical-setting",
        label: "Medical Institute",
        icon: TbSeo,
        link: PATH.setting.medicalInstitute,
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
    link: PATH.mySubscription.index,
  },
  {
    id: "my-membership",
    icon: User2,
    label: "My Membership",
    link: PATH.myMembership.index,
  },
  {
    id: "account",
    icon: User2,
    label: "Account",
    link: PATH.account.index,
  },
  {
    id: "user",
    icon: UserMinus2Icon,
    label: "User",
    link: PATH.user.index,
  },
  {
    id: "role and permission",
    icon: UserMinus2Icon,
    label: "User & Permission",
    children: [
      {
        id: "role",
        icon: UserMinus2Icon,
        label: "Role",
        link: PATH.roleAndPermission.role,
      },
      {
        id: "permission",
        icon: UserMinus2Icon,
        label: "Permission",
        link: PATH.roleAndPermission.permission,
      },
      {
        id: "module",
        icon: UserMinus2Icon,
        label: "Module",
        link: PATH.roleAndPermission.moduleManagement,
      },
    ],
  },
];
