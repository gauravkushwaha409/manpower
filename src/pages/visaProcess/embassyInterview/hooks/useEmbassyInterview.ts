import { useState } from "react";
import { IEmbassyInterview } from "../interface/IEmbassyInterview";

const useEmbassyInterview = () => {
  const [updateEmbassyInterview, setUpdateEmbassyInterview] =
    useState<IEmbassyInterview | null>(null);
  const [deleteEmbassyInterview, setDeleteEmbassyInterview] =
    useState<IEmbassyInterview | null>(null);

  const handleDeleteEmbassyInterview = () => {
    if (!deleteEmbassyInterview) return;
    setDeleteEmbassyInterview(null);
  };

  return {
    updateEmbassyInterview,
    setUpdateEmbassyInterview,
    deleteEmbassyInterview,
    setDeleteEmbassyInterview,
    handleDeleteEmbassyInterview,
  };
};

export default useEmbassyInterview;
