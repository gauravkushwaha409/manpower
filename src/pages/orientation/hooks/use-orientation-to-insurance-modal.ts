import useQuerryParams from "@/hooks/use-query-params";

const ORIENTATION_TO_SHRAM_PARAMS = "orientation-to-shram";
const useOrientationToInsuranceModal = () => {
  const { updateQueryParams, deleteQueryParams, getQueryParams } =
    useQuerryParams();
  const isOrientationToInsurance = !!getQueryParams(
    ORIENTATION_TO_SHRAM_PARAMS
  );
  const handleOpenOrientationToInsurance = () => {
    updateQueryParams({ [ORIENTATION_TO_SHRAM_PARAMS]: "active" });
  };
  const handleCloseOrientationToInsurance = () => {
    deleteQueryParams([ORIENTATION_TO_SHRAM_PARAMS]);
  };
  return {
    isOrientationToInsurance,
    handleOpenOrientationToInsurance,
    handleCloseOrientationToInsurance,
  };
};
export default useOrientationToInsuranceModal;
