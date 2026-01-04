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
    chequeRegister: {},
  },
};
export default QUERY_PARAMS;
