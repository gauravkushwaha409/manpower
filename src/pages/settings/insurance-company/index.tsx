import InsuranceCompanyModal from "./partials/insurance-comapany-modal";
import InsuranceComapanyHeader from "./partials/insurance-company-header";
import InsuranceCompanyTable from "./partials/insurance-company-table";

export default function InsuranceComapany() {
  return (
    <div className="u-flex-parent">
      <InsuranceComapanyHeader />
      <InsuranceCompanyTable />

      {/* ====================== Insurance Company Modal =========================== */}
      <InsuranceCompanyModal />
    </div>
  );
}
