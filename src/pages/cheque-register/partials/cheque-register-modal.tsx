import React from "react";
import ChequeIssuedModal from "../cheque-issued/partials/cheque-issued-modal";
import ChequeReceivedModal from "../cheque-received/partials/cheque-received-modal";

export default function ChequeRegisterModal() {
  return (
    <React.Fragment>
      <ChequeIssuedModal />
      <ChequeReceivedModal />
    </React.Fragment>
  );
}
