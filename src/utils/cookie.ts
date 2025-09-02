import { Cookies } from "react-cookie";
export const COOKIE_CONFIG = {
 accessToken: "access",
 refreshToken: "refresh",
 accessTokenExpiryDuration: 1,
 refreshTokenExpiryDuration: 24 * 7,
};

interface CookieSetOptions {
 path?: string;
 expires?: Date;
 maxAge?: number;
 domain?: string;
 secure?: boolean;
 httpOnly?: boolean;
 sameSite?: boolean | "none" | "lax" | "strict";
 partitioned?: boolean;
}

const cookie = new Cookies();
/**
 * Sets a cookie with the specified name, value, and optional expiration time.
 *
 * @param cookieName - The name of the cookie to set.
 * @param value - The value to store in the cookie.
 * @param expiresIn - Optional. The number of hours until the cookie expires. If not provided, the cookie will be a session cookie.
 */
export const setCookie = ({ cookieName, value, expiresIn, options }: { cookieName: string; value: string; expiresIn?: number; options?: CookieSetOptions }) => {
 if (!expiresIn) {
  cookie.set(cookieName, value);
  return;
 }
 const expiresDate = new Date();
 expiresDate.setTime(expiresDate.getTime() + expiresIn * 60 * 60 * 1000);
 cookie.set(cookieName, value, {
  expires: expiresDate,
  path: "/",
  ...options,
 });
};
/**
 *
 * @param cookieName name of the cookie you want to remove
 * @returns void
 */
export const removeCookie = (cookieName: string) => cookie.remove(cookieName, { path: "/" });

/**
 *
 * @param cookieName name of the cookie whose value to get
 * @returns void
 */
export const getCookie = (cookieName: string) => cookie.get(cookieName);

/**
 * @description Clears accesstokens,refreshtoken and localstorage
 */
export const clearAllCookies = () => {
 removeCookie(COOKIE_CONFIG.accessToken);
 removeCookie(COOKIE_CONFIG.refreshToken);
 localStorage.clear();
};
