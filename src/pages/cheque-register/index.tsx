import { Outlet } from "react-router-dom";
import ChequeRegisterModal from "./partials/cheque-register-modal";
import ChequeRegisterHeaderTable from "./partials/cheque-register-header-table";

export default function ChequeRegister() {
  return (
    <div className="u-flex-parent">
      <Outlet />
      <ChequeRegisterHeaderTable />

      {/* =========== Modal of Cheque Register ================= */}
      <ChequeRegisterModal />
    </div>
  );
}
