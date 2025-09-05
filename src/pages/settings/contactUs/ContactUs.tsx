import PageHeader from "@/common/PageHeader";
import Breadcrumb from "@/components/reusable-component/Breadcrumb";
import Table from "@/components/Table";
import { PATH } from "@/constant/path";
import { ContactUsTableData } from "./hooks/useGetContactUs";
import ContactUsFilterList from "./partials/ContactUsFilterList";
import { ContactUsColumns } from "./partials/ContactUsColumns";

const ContactUs = () => {
  return (
    <div className="bg-surface w-full min-h-full">
      <Breadcrumb Navone="Dashboard" Navtwo="Contact Us" />

      <div>
        <div className="w-full h-fit">
          <PageHeader
            title="Contact Us"
            routePath={PATH.settings.addContactUs}
          />
        </div>
        <div className="py-5">
          <ContactUsFilterList />
        </div>
        <div className="overflow-x-visible">
          <Table columns={ContactUsColumns} data={ContactUsTableData} />
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
