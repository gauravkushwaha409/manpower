import PageHeader from "@/common/PageHeader";
import Breadcrumb from "@/components/reusable-component/Breadcrumb";
import Table from "@/components/Table";
import { PATH } from "@/constant/path";
import LocationFilterList from "./partials/LocationFilterList";
import { LocationColumns } from "./partials/LocationColumns";
import { LocationTableData } from "./hooks/useGetLocation";

const Location = () => {
  return (
    <div className="bg-surface w-full min-h-full">
      <Breadcrumb Navone="Dashboard" Navtwo="Loaction" />

      <div>
        <div className="w-full h-fit">
          <PageHeader title="Location" routePath={PATH.settings.addLocation} />
        </div>
        <div className="py-5">
          <LocationFilterList />
        </div>
        <div className="overflow-x-visible">
          <Table columns={LocationColumns} data={LocationTableData} />
        </div>
      </div>
    </div>
  );
};

export default Location;
