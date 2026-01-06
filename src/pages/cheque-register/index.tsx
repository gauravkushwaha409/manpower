import { Outlet } from "react-router-dom";
import ChequeRegisterHeader from "./partials/cheque-register-header";

export default function ChequeRegister() {
  return (
    <div className="u-flex-parent">
      <ChequeRegisterHeader />
      <Outlet />
    </div>
  );
}
