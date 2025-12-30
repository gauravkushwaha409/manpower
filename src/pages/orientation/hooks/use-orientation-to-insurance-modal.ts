import useQuerryParams from "@/hooks/use-querry-params";

const ORIENTATION_TO_SHRAM_PARAMS = "orientation-to-shram";
const useOrientationToInsuranceModal = () => {
  const { updateQuerryParams, deleteQuerryParams, getQuerryParams } =
    useQuerryParams();
  const isOrientationToInsurance = !!getQuerryParams(
    ORIENTATION_TO_SHRAM_PARAMS
  );
  const handleOpenOrientationToInsurance = () => {
    updateQuerryParams({ [ORIENTATION_TO_SHRAM_PARAMS]: "active" });
  };
  const handleCloseOrientationToInsurance = () => {
    deleteQuerryParams([ORIENTATION_TO_SHRAM_PARAMS]);
  };
  return {
    isOrientationToInsurance,
    handleOpenOrientationToInsurance,
    handleCloseOrientationToInsurance,
  };
};
export default useOrientationToInsuranceModal;
