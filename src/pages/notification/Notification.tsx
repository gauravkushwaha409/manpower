import React from "react";
import PageHeader from "@/common/PageHeader";
import Breadcrumb from "@/components/reusable-component/Breadcrumb";
import NotificationFilterList from "./partials/NotificationFilterList";
import NotificationPage from "./partials/NotificationPage";

const Notification: React.FC = () => {
  return (
    <div className="bg-surface w-full max-h-full">
      <Breadcrumb Navone="Dashboard" Navtwo="Notifications" />
      <div>
        <div className="w-full h-fit">
          <PageHeader title="Notification" />
        </div>
        <div className="py-5">
          <NotificationFilterList />
        </div>
        <div className="overflow-x-visible">
          <NotificationPage />
        </div>
      </div>
    </div>
  );
};

export default Notification;
