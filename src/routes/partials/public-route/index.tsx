import { PATH } from "@/constant/path";
import Login from "@/pages/login/Login";
import ForgotPassword from "@/pages/newPassword/NewPassword";
import Reset from "@/pages/reset/Reset";
import VerifyOtp from "@/pages/otpVerification/VerifyOtp";

export const publicRoutes = [
  { path: PATH.auth.login, element: <Login /> },
  { path: PATH.auth.verifyOtp, element: <VerifyOtp /> },
  { path: PATH.auth.forgotPassword, element: <ForgotPassword /> },
  { path: PATH.auth.resetPassword, element: <Reset /> },
];
