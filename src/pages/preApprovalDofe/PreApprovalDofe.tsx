import PageHeader from "@/common/PageHeader";
import Breadcrumb from "@/components/reusable-component/Breadcrumb";
import { PATH } from "@/constant/path";
import Table from "@/components/Table";
import PreApprovalDofeFilterList from "./partials/PreApprovalDofeFilterList";
import { PreApprovalDofeColumns } from "./partials/PreApprovalDofeColumns";
import { PreApprovalDofeTableData } from "./hooks/useGetPreApprovalDofe";


const PreApprovalDofe = () => {

  return (
    <div className="bg-surface w-full min-h-full">
      <Breadcrumb
        items={[
          { label: "Dashboard", to: PATH.dashboard.dashboard },
          {
            label: "Pre Approval Dofe",
          },
        ]}
      />
      {/* <div>
        <div className="w-full h-fit">
          <PageHeader
            title="Pre Approval Dofe"
            routePath={PATH.dashboard.addPreApprovalDofe}
          />
        </div>
        <div className="py-5">
          <PreApprovalDofeFilterList search={search} setSearch={setSearch} />
        </div>
        <div className="overflow-x-visible">
          {isGetPreApprovalDofeSuccess ? (
            <Table<IPreApprovalDofeListItem>
              columns={PreApprovalDofeColumns(page, pageSize)}
              data={preApprovalDofeData?.data?.records}
              pages={{
                page,
                pageSize,
                setPage,
                setPageSize,
              }}
              totalItem={preApprovalDofeData?.data?.totalRecords}
              totalPage={preApprovalDofeData?.data?.totalPages}
            />
          ) : isGetPreApprovalDofeLoading ? (
            <LoadingScreen />
          ) : (
            <ErrorMessage />
          )}
        </div>
      </div> */}
      <div>
        <div className="w-full h-fit">
          <PageHeader
            title="Pre Approval DOFE"
            routePath={PATH.dashboard.addPreApprovalDofe}
          />
        </div>
        <div className="py-5">
          <PreApprovalDofeFilterList />
        </div>
        <div className="overflow-x-visible">
          <Table
            columns={PreApprovalDofeColumns}
            data={PreApprovalDofeTableData}
          />
        </div>
      </div>
    </div>
  );
};

export default PreApprovalDofe;
