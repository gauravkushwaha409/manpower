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
  payment: "/payment",
  addPayment: "/add-payment",
  updatePayment: "/update-payment",
  notification: "/notifications",
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
  setting: {
    index: "/setting",
    jobSetting: {
      industry: "/setting/job-setting/industry",
      category: "/setting/job-setting/category",
      subCategory: "/setting/job-setting/sub-category",
      jobTitle: "/setting/job-setting/job-title",
    },
    documentSetting: "/setting/document-setting",
  },
};
