import React from "react";
import PageHeader from "@/common/PageHeader";
import Breadcrumb from "@/components/reusable-component/Breadcrumb";
import { PATH } from "@/constant/path";
import IndustryFilter from "./partials/IndustryFilter";
import IndustryTable from "./partials/IndustryTable";

const Industry: React.FC = () => {
  return (
    <div className="u-flex-parent">
      <Breadcrumb
        items={[
          { label: "Dashboard", to: PATH.dashboard.dashboard },
          { label: "Setting", to: PATH.setting.index },
        ]}
      />
      <PageHeader title="Industry" routePath="#" handleAddClick={() => {}} />
      <IndustryFilter />
      <IndustryTable />
    </div>
  );
};

export default Industry;
