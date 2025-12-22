import PageHeader from "@/common/PageHeader";
import Breadcrumb from "@/components/reusable-component/Breadcrumb";
import { PATH } from "@/constant/path";
import PreApprovalDofeFilter from "./partials/PreApprovalDofeFilter";
import PreApprovalDofeTable from "./partials/PreApprovalDofeTable";

const PreApprovalDofe = () => {
  return (
    <div className="u-flex-parent">
      <Breadcrumb
        items={[
          { label: "Dashboard", to: PATH.dashboard.dashboard },
          {
            label: "Pre Approval Dofe",
          },
        ]}
      />
      <PageHeader
        title="Pre Approval DOFE"
        routePath={PATH.preApprovalDofe.create}
      />
      <PreApprovalDofeFilter />
      <PreApprovalDofeTable />
    </div>
  );
};

export default PreApprovalDofe;
