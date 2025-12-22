import PageHeader from "@/common/PageHeader";
import Breadcrumb from "@/components/reusable-component/Breadcrumb";
import SubCategoryFilter from "./partials/SubCategoryFilter";
import { PATH } from "@/constant/path";
import SubCategoryTable from "./partials/SubCategoryTable";

const SubCategory = () => {
  return (
    <div className="u-flex-parent">
      <Breadcrumb
        items={[
          { label: "Dashboard", to: PATH.dashboard.dashboard },
          { label: "Setting", to: PATH.setting.index },
        ]}
      />
      <PageHeader
        title="Sub Category"
        routePath="#"
        handleAddClick={() => {}}
      />
      <SubCategoryFilter />
      <SubCategoryTable />
    </div>
  );
};

export default SubCategory;
