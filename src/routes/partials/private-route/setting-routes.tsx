import { PATH } from "@/constant/path";
import Category from "@/pages/settings/job-setting/category/Category";
import Industry from "@/pages/settings/job-setting/industry/Industry";
import JobTitle from "@/pages/settings/job-setting/job-title/job-title";
import SubCategory from "@/pages/settings/job-setting/sub-category/sub-category";

export const settingRoutes = [
  {
    path: PATH.setting.jobSetting.industry,
    element: <Industry />,
  },
  {
    path: PATH.setting.jobSetting.category,
    element: <Category />,
  },
  {
    path: PATH.setting.jobSetting.subCategory,
    element: <SubCategory />,
  },
  {
    path: PATH.setting.jobSetting.jobTitle,
    element: <JobTitle />,
  },
];
