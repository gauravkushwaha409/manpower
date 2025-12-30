import useQuerryParams from "@/hooks/use-querry-params";

const JOB_OFFER_TO_MEDICAL_PARAMS = "move-job-offer-to-medical";
const useJobOfferToMedicalModal = () => {
  const { deleteQuerryParams, getQuerryParams, updateQuerryParams } =
    useQuerryParams();
  const isJobOfferToMedicalOpen = !!getQuerryParams(
    JOB_OFFER_TO_MEDICAL_PARAMS
  );

  const handleOpenJobOfferToMedical = () => {
    updateQuerryParams({ [JOB_OFFER_TO_MEDICAL_PARAMS]: "active" });
  };
  const handleCloseJobOfferToMedical = () => {
    deleteQuerryParams([JOB_OFFER_TO_MEDICAL_PARAMS]);
  };
  return {
    isJobOfferToMedicalOpen,
    handleOpenJobOfferToMedical,
    handleCloseJobOfferToMedical,
  };
};

export default useJobOfferToMedicalModal;
