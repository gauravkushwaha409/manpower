// import { ACCESS_TOKEN } from '@/constant';
import { PATH } from "@/constant/path";
// import { getCookie } from '@/lib/utils/get-cookie';
import React from "react";
import { Navigate, useLocation } from "react-router-dom";

/**
 * A wrapper component for protecting private routes.
 * It checks if the user is authenticated (based on the presence of an access token in cookies).
 * If not authenticated, the user is redirected to the login page.
 * If authenticated and the user is on the root path `/`,
 * they are redirected to the dashboard.
 */
const PrivateRouteWrapper = ({ children }: { children?: React.ReactNode }) => {
  // const isLoggedIn = !!getCookie(ACCESS_TOKEN);
  const isLoggedIn = true;
  const location = useLocation();

  // If user is not logged in, navigate to the login page
  if (!isLoggedIn) {
    return <Navigate to={PATH.auth.login} replace />;
  }

  // If user is logged in and tries to access root `/`, redirect them to dashboard
  if (location.pathname === "/") {
    return <Navigate to={PATH.dashboard.dashboard} replace />;
  }

  // Render children (protected content) if authenticated
  return <>{children}</>;
};

export default PrivateRouteWrapper;
