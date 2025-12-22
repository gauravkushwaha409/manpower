import { PATH } from "@/constant/path";
import Industry from "@/pages/industry/Industry";
import Category from "@/pages/settings/job-setting/category/Category";
import SubCategory from "@/pages/settings/job-setting/sub-category/SubCategory";

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
    path: PATH.setting.jobSetting.category,
    element: <SubCategory />,
  },
];
