import { PATH } from "@/constant/path";
import DocumentSetting from "@/pages/settings/document-setting/document-setting";
import InsuranceComapany from "@/pages/settings/insurance-company";
import Category from "@/pages/settings/job-setting/category/Category";
import Industry from "@/pages/settings/job-setting/industry/Industry";
import JobTitle from "@/pages/settings/job-setting/job-title/job-title";
import SubCategory from "@/pages/settings/job-setting/sub-category/sub-category";
import MedicalInstitute from "@/pages/settings/medical-institute";
import OrientationInstitute from "@/pages/settings/orientation-institute";

export const settingRoutes = [
  {
    path: PATH.setting.documentSetting,
    element: <DocumentSetting />,
  },
  {
    path: PATH.setting.insuranceCompany,
    element: <InsuranceComapany />,
  },
  {
    path: PATH.setting.medicalInstitute,
    element: <MedicalInstitute />,
  },
  {
    path: PATH.setting.orientationInstitute,
    element: <OrientationInstitute />,
  },
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
