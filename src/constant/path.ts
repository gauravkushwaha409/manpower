/**
AUTH PATH
*/
const AUTH_PATH = {
  login: "/login",
  forgotPassword: "/forgot-password",
  changePassword: "/change-password",
  resetPassword: "/reset-password",
  verifyOtp: "/verify-otp",
};

/**
 * DASHBOARD PATH
 */
const DASHBOARD_PATH = {
  dashboard: "/",
  language: "/language",
};

const JOB_PROCESS = {
  jobCategories: "/job-categories",
  jobVacancies: "/job-vacancies",
  jobApplications: "/job-applications",
  jobOffer: "/job-offer",
  interviewCandidates: "/interview-candidates",
};

/**
 *ALL PATH
 */
export const PATH = {
  auth: AUTH_PATH,
  dashboard: DASHBOARD_PATH,
  jobProcess: JOB_PROCESS,
};
