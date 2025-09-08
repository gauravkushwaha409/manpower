import React from "react";
import Table from "@/components/Table";
import { IndustryColumns } from "./partials/IndustryColumns";
import PageHeader from "@/common/PageHeader";
import Breadcrumb from "@/components/reusable-component/Breadcrumb";
import { PATH } from "@/constant/path";
import IndustryFilterList from "./partials/IndustryFilterList";
import { IndustryTableData } from "./hooks/useGetIndustry";

const Industry: React.FC = () => {
  return (
    <div className="bg-surface w-full min-h-full">
      <Breadcrumb Navone="Dashboard" Navtwo="Industry" />
      <div>
        <div className="w-full h-fit">
          <PageHeader title="Industry" routePath={PATH.dashboard.addIndustry} />
        </div>
        <div className="py-5">
          <IndustryFilterList />
        </div>
        <div className="overflow-x-visible">
          <Table columns={IndustryColumns} data={IndustryTableData} />
        </div>
      </div>
    </div>
  );
};

export default Industry;
