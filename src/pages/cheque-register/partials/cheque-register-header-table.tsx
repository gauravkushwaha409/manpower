import PageHeader from "@/common/PageHeader";
import { PATH } from "@/constant/path";
import QUERY_PARAMS from "@/constant/query-params";
import { useAddModal } from "@/hooks/use-add-modal";
import React from "react";
import { useMatch, useNavigate } from "react-router-dom";
import ChequeRegisterTable from "./cheque-register-table";

export default function ChequeRegisterHeaderTable() {
  const isRootRoute = useMatch(PATH.accounting.chequeRegister.index);

  return (
    <React.Fragment>
      {isRootRoute && (
        <React.Fragment>
          <PageHeader title="Cheque Register" />
          <ChequeCardWContainer />
          <ChequeRegisterTable />
        </React.Fragment>
      )}
    </React.Fragment>
  );
}

function ChequeCardWContainer() {
  const navigate = useNavigate();
  const addChequeIssued = useAddModal(
    QUERY_PARAMS.chequeRegister.chequeIssued.createChequeIssued.key,
    QUERY_PARAMS.chequeRegister.chequeIssued.createChequeIssued.value
  );

  const addChequeReceived = useAddModal(
    QUERY_PARAMS.chequeRegister.chequeReceived.createChequeReceived.key,
    QUERY_PARAMS.chequeRegister.chequeReceived.createChequeReceived.value
  );

  const handleViewAllChequeIssued = React.useCallback(() => {
    navigate(PATH.accounting.chequeRegister.chequeIssued.index);
  }, []);
  const handleViewAllChequeReceived = React.useCallback(() => {
    navigate(PATH.accounting.chequeRegister.chequeReceived.index);
  }, []);
  return (
    <div className="grid grid-cols-2 gap-x-10 my-4">
      <ChequeCard
        type="issued"
        handleAddClick={addChequeIssued.handleOpenModal}
        handleViewAllClick={handleViewAllChequeIssued}
      />
      <ChequeCard
        type="received"
        handleAddClick={addChequeReceived.handleOpenModal}
        handleViewAllClick={handleViewAllChequeReceived}
      />
    </div>
  );
}

function ChequeCard({
  type,
  handleAddClick,
  handleViewAllClick,
}: {
  type: "received" | "issued";
  handleAddClick: () => void;
  handleViewAllClick: () => void;
}) {
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
        <button
          onClick={(e) => {
            e.preventDefault();
            handleViewAllClick();
          }}
          className="typography-button-text cursor-pointer text-text-500"
        >
          View All
        </button>
      </div>
      <button
        onClick={(e) => {
          e.preventDefault();
          handleAddClick();
        }}
        className="typography-button-text cursor-pointer text-text-500"
      >
        + Add New
      </button>
    </div>
  );
}
