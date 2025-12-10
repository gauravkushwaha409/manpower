import { LanguageColumns } from "./partials/LanguageColumns";
import { getLanguageData } from "./hooks/useGetLanguage";
import Breadcrumb from "@/components/reusable-component/Breadcrumb";
import PageHeader from "@/common/PageHeader";
import { PATH } from "@/constant/path";
import LanguageFilterList from "./partials/LanguageFilterList";
import Table from "@/components/Table";

function Language() {
  return (
    <div className="bg-surface w-full min-h-full">
      <Breadcrumb
        items={[
          { label: "Dashboard" },
          {
            label: "Langugae",
          },
        ]}
      />
      <div>
        <div className="w-full h-fit">
          <PageHeader title="Language" routePath={PATH.dashboard.addLanguage} />
        </div>
        <div className="py-5">
          <LanguageFilterList />
        </div>
        <div className="overflow-x-visible">
          <Table columns={LanguageColumns} data={getLanguageData} />
        </div>
      </div>
    </div>
  );
}

export default Language;
