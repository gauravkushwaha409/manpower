import { useSearchParams } from "react-router-dom";
import useDisclosure from "./useDisclousre";
import { useEffect } from "react";
import {
  useDeleteSearchParams,
  useUpdateSearchParams,
} from "./updateSearchParams";

export const useAddModal = () => {
  const [searchParams] = useSearchParams();
  const updateSearchParams = useUpdateSearchParams();
  const deleteParams = useDeleteSearchParams();
  const isOpen = useDisclosure();
  const addParams = searchParams.get("add") ?? "inactive";
  useEffect(() => {
    if (addParams === "active") isOpen.open();
    else isOpen.close();
  }, [searchParams]);

  const handleOpenModal = () => {
    updateSearchParams({ add: "active" });
  };

  const handleCloseModal = () => {
    deleteParams(["add"]);
  };

  return {
    handleOpenModal,
    isOpen: isOpen.isOpen,
    handleCloseModal: handleCloseModal,
  };
};
