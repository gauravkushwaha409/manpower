export const endpoints = {
  refreshToken: '/user/token/refresh/',
  getData: '/getData',
  login: '/user/superadmin/login',
  changePassword: '/user/superadmin/change-password',
  createUser: '/user/register',
  getUser: '/user/list/search/',
  getUserById: '/user/profile/',
  updateuserById: '/user/update-profile/',
  deleteUserById: '/user/delete/',
  organizationSettings: {
    list: '/organization-settings/list',
    create: '/organization-settings/create',
    update: '/organization-settings/update',
    delete: '/organization-settings/delete',
    details: '/organization/detail/id/',
  },
};

export const BASE_API_URL =
  import.meta.env.VITE_PUBLIC_API_URL || 'https://api.manpower.com';
