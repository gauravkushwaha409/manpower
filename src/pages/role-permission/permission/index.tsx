import PageHeader from "@/common/PageHeader";
import PermissionForm from "./partials/permission-form";

export default function Permission() {
  return (
    <div className="u-flex-parent">
      <PageHeader title="Permissions" />
      <PermissionForm />
    </div>
  );
}
