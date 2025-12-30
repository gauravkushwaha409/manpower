import useQuerryParams from "@/hooks/use-querry-params";

const INSURANCE_TO_SHRAM_PARAMS = "insurance-to-shram";

const useInsuranceToShramModal = () => {
  const { updateQuerryParams, deleteQuerryParams, getQuerryParams } =
    useQuerryParams();

  const isInsuranceToShram = !!getQuerryParams(INSURANCE_TO_SHRAM_PARAMS);

  const handleOpenInsuranceToShram = () => {
    updateQuerryParams({ [INSURANCE_TO_SHRAM_PARAMS]: "active" });
  };

  const handleCloseInsuranceToShram = () => {
    deleteQuerryParams([INSURANCE_TO_SHRAM_PARAMS]);
  };

  return {
    isInsuranceToShram,
    handleOpenInsuranceToShram,
    handleCloseInsuranceToShram,
  };
};

export default useInsuranceToShramModal;
