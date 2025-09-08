import React from "react";
import Table from "@/components/Table";
import PageHeader from "@/common/PageHeader";
import Breadcrumb from "@/components/reusable-component/Breadcrumb";
import { PATH } from "@/constant/path";
import { PreApplicationTableData } from "./hooks/useGetPreApplication";
import PreApplicationFilterList from "./partials/PreApplicationFilterList";
import { PreApplicationColumns } from "./partials/PreApplicationColumns";

const PreApplication: React.FC = () => {
  return (
    <div className="bg-surface w-full min-h-full">
      <Breadcrumb Navone="Dashboard" Navtwo="PreApplication" />
      <div>
        <div className="w-full h-fit">
          <PageHeader
            title="PreApplication"
            routePath={PATH.dashboard.addPreAppliction}
          />
        </div>
        <div className="py-5">
          <PreApplicationFilterList />
        </div>
        <div className="overflow-x-visible">
          <Table
            columns={PreApplicationColumns}
            data={PreApplicationTableData}
          />
        </div>
      </div>
    </div>
  );
};

export default PreApplication;
