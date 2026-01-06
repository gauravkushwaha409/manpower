import PageHeader from "@/common/PageHeader";
import { PATH } from "@/constant/path";
import React from "react";
import { useMatch } from "react-router-dom";

export default function ChequeRegisterHeader() {
  const isRootRoute = useMatch(PATH.accounting.chequeRegister.index);

  return (
    <React.Fragment>
      {isRootRoute && <PageHeader title="Cheque Register" />}
      <ChequeCardWContainer />
    </React.Fragment>
  );
}

function ChequeCardWContainer() {
  return (
    <div className="grid grid-cols-2 gap-x-10 my-4">
      <ChequeCard type="issued" />
      <ChequeCard type="received" />
    </div>
  );
}

function ChequeCard({ type }: { type: "received" | "issued" }) {
  return (
    <div className="p-4 rounded-2xl flex items-start justify-between bg-primary-50">
      <div className="flex flex-col items-start gap-y-2">
        <p
          className={`typo-xl-bd-reg ${
            type === "issued" ? "text-red-500" : "text-green-500"
          }`}
        >
          0
        </p>
        <p className="text-text-400 typo-mid-bd-reg">
          {type === "issued" ? "Cheque Issued" : "Cheque Received"}
        </p>
        <button className="typography-button-text cursor-pointer text-text-500">
          View All
        </button>
      </div>
      <button className="typography-button-text cursor-pointer text-text-500">
        + Add New
      </button>
    </div>
  );
}
