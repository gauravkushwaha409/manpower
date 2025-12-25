import { useSearchParams } from "react-router-dom";
import useDisclosure from "./useDisclousre";
import { useEffect } from "react";
import {
  useUpdateSearchParams,
  useDeleteSearchParams,
} from "./updateSearchParams";
import useStringState from "@/utils/useStringState";

export const useUpdateModal = () => {
  const [searchParams] = useSearchParams();
  const updateSearchParams = useUpdateSearchParams();
  const deleteParams = useDeleteSearchParams();
  const isOpen = useDisclosure();
  const updateIdState = useStringState();
  const updateParams = searchParams.get("update") ?? "inactive";
  const updateIdParams = searchParams.get("update-id");

  useEffect(() => {
    if (updateParams === "active" && updateIdParams) {
      isOpen.open();
      updateIdState.setValue(updateIdParams);
    } else isOpen.close();
  }, [searchParams]);

  const handleOpenModal = (id: string) => {
    updateSearchParams({ update: "active", "update-id": id });
  };

  const handleCloseModal = () => {
    deleteParams(["update", "update-id"]);
  };

  return {
    isOpen: isOpen.isOpen,
    updateId: updateIdState.values,
    handleOpenModal,
    handleCloseModal,
  };
};
