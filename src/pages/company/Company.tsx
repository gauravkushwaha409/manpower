import React from "react";
import Table from "@/components/Table";
import PageHeader from "@/common/PageHeader";
import Breadcrumb from "@/components/reusable-component/Breadcrumb";
import { PATH } from "@/constant/path";
import { CompanyColumns } from "./partials/CompanyColumns";
import CompanyFilterList from "./partials/CompanyFilterList";
import { companyTableData } from "@/data/company";

const Company: React.FC = () => {
  return (
    <div className="bg-surface w-full min-h-full">
      <Breadcrumb
        items={[
          { label: "Dashboard" },
          {
            label: "Company",
          },
        ]}
      />
      <div>
        <div className="w-full h-fit">
          <PageHeader title="Company" routePath={PATH.dashboard.addCompany} />
        </div>
        <div className="py-5">
          <CompanyFilterList />
        </div>
        <div className="overflow-x-visible">
          <Table columns={CompanyColumns} data={companyTableData} />
        </div>
      </div>
    </div>
  );
};

export default Company;
