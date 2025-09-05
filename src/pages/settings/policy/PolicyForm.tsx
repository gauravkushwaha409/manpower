import PageHeader from "@/common/PageHeader";
import Breadcrumb from "@/components/reusable-component/Breadcrumb";
import Table from "@/components/Table";
import { PATH } from "@/constant/path";
import ContactUsFilterList from "./partials/PolicyFilterList";
import { PolicyColumns } from "./partials/PolicyColumns";
import { PolicyTableData } from "./hooks/useGetPolicy";

const Policy = () => {
  return (
    <div className="bg-surface w-full min-h-full">
      <Breadcrumb Navone="Dashboard" Navtwo="Policy" />
k
      <div>
        <div className="w-full h-fit">
          <PageHeader title="Policy" routePath={PATH.settings.addPolicy} />
        </div>
        <div className="py-5">
          <ContactUsFilterList />
        </div>
        <div className="overflow-x-visible">
          <Table columns={PolicyColumns} data={PolicyTableData} />
        </div>
      </div>
    </div>
  );
};

export default Policy;
