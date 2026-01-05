const AUTH_PATH = {
  login: "/login",
  forgotPassword: "/forgot-password",
  changePassword: "/change-password",
  resetPassword: "/reset-password",
  verifyOtp: "/verify-otp",
};

const DASHBOARD_PATH = {
  dashboard: "/dashboard",
  language: "/language",
  addLanguage: "/add-language",
  updateLanguage: "/update-language",
};

export const PATH = {
  auth: AUTH_PATH,
  dashboard: DASHBOARD_PATH,
  preApprovalDofe: {
    index: "/pre-approval-dofe",
    create: "/pre-approval-dofe/create",
    update: "/pre-approval-dofe/update/:id",
  },
  company: {
    index: "/company",
    create: "/company/create",
    update: "/company/update/:id",
  },
  country: {
    index: "/country",
  },
  candidate: {
    index: "/candidate",
    create: "/candidate/create",
    update: "/candidate/update/:id",
  },
  interview: {
    index: "/interview",
  },
  jobOffer: {
    index: "/job-offer",
  },
  medical: {
    index: "/medical",
  },
  visa: {
    index: "/visa",
  },
  orientation: {
    index: "/orientation",
  },
  insurance: {
    index: "/insurance",
  },
  shram: {
    index: "/shram",
  },
  ticket: {
    index: "/ticket",
  },
  jobVacancy: {
    index: "/job-vacancy",
    create: "/job-vacancy/create",
    update: "/job-vacancy/update/:id",
  },
  invoice: {
    index: "/invoice",
    create: "/invoice/create",
    update: "/invoice/update/:id",
  },
  chartOfAccount: {
    account: {
      index: "/chart-of-account/account",
    },
    group: {
      index: "/chart-of-account/group",
    },
  },
  chequeRegister: {
    chequeIssued: {
      index: "/cheque-register/cheque-issued",
    },
    chequeReceived: {
      index: "/cheque-register/cheque-received",
    },
  },
  quickPayment: {
    index: "/quick-payment",
    create: "/quick-payment/create",
    update: "/quick-payment/update/:id",
  },
  accounting: {
    purchase: {
      expense: {
        index: "/accounting/purchase/expense",
        create: "/accounting/purchase/expense/create",
        update: "/accounting/purchase/expense/create/:id",
      },
      supplier: {
        index: "/accounting/purchase/supplier",
      },
    },
    sales: {},
    quickPayment: {},
    chartOfAccount: {},
    chequeRegister: {},
  },
  setting: {
    index: "/setting",
    jobSetting: {
      industry: "/setting/job-setting/industry",
      category: "/setting/job-setting/category",
      subCategory: "/setting/job-setting/sub-category",
      jobTitle: "/setting/job-setting/job-title",
    },
    documentSetting: "/setting/document-setting",
    medicalInstitute: "/setting/medical-institute",
    orientationInstitute: "/setting/orientation-institute",
    insuranceCompany: "/setting/insurance-comapany",
  },
  user: {
    index: "/user",
  },
  roleAndPermission: {
    role: "/role-and-permission/role",
    permission: "/role-and-permission/permission",
    moduleManagement: "/role-and-permission/module-management",
  },
};
