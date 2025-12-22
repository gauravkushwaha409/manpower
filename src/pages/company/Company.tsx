import React from "react";
import PageHeader from "@/common/PageHeader";
import Breadcrumb from "@/components/reusable-component/Breadcrumb";
import { PATH } from "@/constant/path";
import CompanyFilterList from "./partials/CompanyFilterList";
import ComapnyTable from "./partials/ComapnyTable";

const Company: React.FC = () => {
  return (
    <div className="u-flex-parent">
      <Breadcrumb
        items={[
          { label: "Dashboard" },
          {
            label: "Company",
          },
        ]}
      />
      <PageHeader title="Company" routePath={PATH.dashboard.addCompany} />
      <CompanyFilterList />
      <ComapnyTable />
    </div>
  );
};

export default Company;
