import React from "react";
import Table from "@/components/Table";
import PageHeader from "@/common/PageHeader";
import Breadcrumb from "@/components/reusable-component/Breadcrumb";
import { PATH } from "@/constant/path";
import { UserColumns } from "./partials/UserColumns";
import UserFilterList from "./partials/UserFilterList";
import { UserTableData } from "./hooks/useGetUser";

const User: React.FC = () => {
  return (
    <div className="bg-surface w-full min-h-full">
      <Breadcrumb
        items={[
          { label: "Dashboard" },
          {
            label: "User",
          },
        ]}
      />
      <div>
        <div className="w-full h-fit">
          <PageHeader title="Users" routePath={PATH.dashboard.addUser} />
        </div>
        <div className="py-5">
          <UserFilterList />
        </div>
        <div className="overflow-x-visible">
          <Table columns={UserColumns} data={UserTableData} />
        </div>
      </div>
    </div>
  );
};

export default User;
