import useQuerryParams from "@/hooks/use-querry-params";

const VISA_TO_ORIENTATION_PARAMS = "visa-to-orientation";
const useVisaToOrientationModal = () => {
  const { updateQuerryParams, deleteQuerryParams, getQuerryParams } =
    useQuerryParams();
  const isVisaToOrientation = !!getQuerryParams(VISA_TO_ORIENTATION_PARAMS);
  const handleOpenVisaToOrientation = () => {
    updateQuerryParams({ [VISA_TO_ORIENTATION_PARAMS]: "active" });
  };
  const handleCloseVisaToOrientation = () => {
    deleteQuerryParams([VISA_TO_ORIENTATION_PARAMS]);
  };
  return {
    isVisaToOrientation,
    handleOpenVisaToOrientation,
    handleCloseVisaToOrientation,
  };
};
export default useVisaToOrientationModal;
