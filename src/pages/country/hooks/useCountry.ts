import { useState } from "react";
import { ICountry } from "../interface/ICountry";

const useCountry = () => {
  const [updateCountry, setUpdateCountry] = useState<ICountry | null>(null);
  const [deleteCountry, setDeleteCountry] = useState<ICountry | null>(null);

  const handleDeleteCountry = () => {
    if (!deleteCountry) return;
    setDeleteCountry(null);
  };

  return {
    updateCountry,
    setUpdateCountry,
    deleteCountry,
    setDeleteCountry,
    handleDeleteCountry,
  };
};

export default useCountry;
