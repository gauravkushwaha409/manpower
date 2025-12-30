import useQuerryParams from "@/hooks/use-querry-params";

const JOB_OFFER_TO_MEDICAL_PARAMS = "move-job-offer-to-medical";

const useMedicalToVisaModal = () => {
  const { deleteQuerryParams, getQuerryParams, updateQuerryParams } =
    useQuerryParams();
  const isMedicalToVisaOpen = !!getQuerryParams(JOB_OFFER_TO_MEDICAL_PARAMS);

  const handleOpenMedicalToVisa = () => {
    updateQuerryParams({ [JOB_OFFER_TO_MEDICAL_PARAMS]: "active" });
  };
  const handleCloseMedicalToVisa = () => {
    deleteQuerryParams([JOB_OFFER_TO_MEDICAL_PARAMS]);
  };

  return {
    isMedicalToVisaOpen,
    handleOpenMedicalToVisa,
    handleCloseMedicalToVisa,
  };
};
export default useMedicalToVisaModal;
