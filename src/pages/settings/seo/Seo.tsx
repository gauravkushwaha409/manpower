import PageHeader from "@/common/PageHeader";
import Breadcrumb from "@/components/reusable-component/Breadcrumb";
import Table from "@/components/Table";
import { PATH } from "@/constant/path";
import ContactUsFilterList from "./partials/SeoFilterList";
import { SeoTableData } from "./hooks/useGetSeo";
import { SeoColumns } from "./partials/SeoColumns";

const Seo = () => {
  return (
    <div className="bg-surface w-full min-h-full">
      <Breadcrumb Navone="Dashboard" Navtwo="Seo" />
      <div>
        <div className="w-full h-fit">
          <PageHeader title="Static SEO" routePath={PATH.settings.addSeo} />
        </div>
        <div className="py-5">
          <ContactUsFilterList />
        </div>
        <div className="overflow-x-visible">
          <Table columns={SeoColumns} data={SeoTableData} />
        </div>
      </div>
    </div>
  );
};

export default Seo;
