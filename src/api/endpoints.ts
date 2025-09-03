export const endpoints = {
  refreshToken: "/user/token/refresh/",
  getData: "/getData",
  login: "/user/login",
  createUser: "/user/register",
  getUser: "/user/list/search/",
  getUserById: "/user/profile/",
  updateuserById: "/user/update-profile/",
  deleteUserById: "/user/delete/",
};

export const BASE_API_URL =
  import.meta.env.VITE_PUBLIC_API_URL || "https://api.manpower.com";
