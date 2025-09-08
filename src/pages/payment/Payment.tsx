import React from "react";
import Table from "@/components/Table";
import PageHeader from "@/common/PageHeader";
import Breadcrumb from "@/components/reusable-component/Breadcrumb";
import { PATH } from "@/constant/path";
import { PaymentColumns } from "./partials/PaymentColumns";
import CompanyFilterList from "./partials/PaymentFilterList";
import { PaymentTableData } from "./hooks/useGetPayment";

const Payment: React.FC = () => {
  return (
    <div className="bg-surface w-full min-h-full">
      <Breadcrumb Navone="Dashboard" Navtwo="Payment" />
      <div>
        <div className="w-full h-fit">
          <PageHeader title="Payment" routePath={PATH.dashboard.addPayment} />
        </div>
        <div className="py-5">
          <CompanyFilterList />
        </div>
        <div className="overflow-x-visible">
          <Table columns={PaymentColumns} data={PaymentTableData} />
        </div>
      </div>
    </div>
  );
};

export default Payment;
