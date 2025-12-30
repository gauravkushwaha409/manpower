import useQuerryParams from "@/hooks/use-querry-params";

const MOVE_TO_JOB_OFFER_PARAMS = "move-to-job-offer";
const useMoveToJobOfferModal = () => {
  const { getQuerryParams, updateQuerryParams, deleteQuerryParams } =
    useQuerryParams();

  const handleOpenMoveToJobOffer = () => {
    updateQuerryParams({ [MOVE_TO_JOB_OFFER_PARAMS]: "active" });
  };

  const handleCloseMoveToJobOffer = () => {
    deleteQuerryParams([MOVE_TO_JOB_OFFER_PARAMS]);
  };
  return {
    handleOpenMoveToJobOffer,
    handleCloseMoveToJobOffer,
    isMoveToJobOfferOpen: !!getQuerryParams(MOVE_TO_JOB_OFFER_PARAMS),
  };
};
export default useMoveToJobOfferModal;
