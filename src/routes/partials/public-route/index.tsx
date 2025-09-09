import { PATH } from "@/constant/path";
import Login from "@/pages/auth/login/Login";
import ForgotPassword from "@/pages/auth/forgotPassword/NewPassword";
import VerifyOtp from "@/pages/auth/otpVerification/VerifyOtp";
import Reset from "@/pages/auth/reset/Reset";

export const publicRoutes = [
  { path: PATH.auth.login, element: <Login /> },
  { path: PATH.auth.verifyOtp, element: <VerifyOtp /> },
  { path: PATH.auth.forgotPassword, element: <ForgotPassword /> },
  { path: PATH.auth.resetPassword, element: <Reset /> },
];
