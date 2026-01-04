const QUERY_PARAMS = {
  orientation: {
    // update the orientation status from the table
    updateOrientationStatus: "update-orientation-status",
    orientationStatus: "orientation-status",
  },
  // Cheque Register
  chequeRegister: {
    chequeIssued: {
      createChequeIssued: {
        key: "create-cheque-issued",
        value: "active",
      },
      updateChequeIssued: {
        key: "update-cheque-issued",
      },
    },
    chequeReceived: {
      createChequeReceived: {
        key: "create-cheque-received",
        value: "active",
      },
      updateChequeReceived: {
        key: "update-cheque-received",
      },
    },
  },
  // Supplier
  supplier: {
    createSupplier: {
      key: "create-supplier",
      value: "active",
    },
    updateSupplier: {
      key: "update-supplier",
    },
  },
};
export default QUERY_PARAMS;
