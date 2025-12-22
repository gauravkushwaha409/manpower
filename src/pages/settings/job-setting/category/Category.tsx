import PageHeader from "@/common/PageHeader";
import Breadcrumb from "@/components/reusable-component/Breadcrumb";
import { PATH } from "@/constant/path";
import CategoryFilter from "./partials/CategoryFilter";
import CategoryTable from "./partials/CategoryTable";

const Category = () => {
  return (
    <div className="u-flex-parent">
      <Breadcrumb
        items={[
          { label: "Dashboard", to: PATH.dashboard.dashboard },
          { label: "Setting", to: PATH.setting.index },
        ]}
      />
      <PageHeader title="Industry" routePath="#" handleAddClick={() => {}} />
      <CategoryFilter />
      <CategoryTable />
    </div>
  );
};

export default Category;
