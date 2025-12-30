import useQueryParams from "@/hooks/use-query-params";
import {
  orientationStatus,
  OrientationStatusType,
} from "../schema/orientation-schema";
import QUERY_PARAMS from "@/constant/query-params";
import { useCallback } from "react";
import { useValidatedSearchParam } from "@/hooks/updateSearchParams";

const useUpdateOrientationStatusModal = () => {
  const { getQueryParams, deleteQueryParams, updateQueryParams } =
    useQueryParams();
  const getValidQuerryParams = useValidatedSearchParam(
    QUERY_PARAMS.orientation.orientationStatus,
    orientationStatus,
    orientationStatus[0]
  );

  // Check whether the modal is open or not
  const isOrientationStatusModalOpen =
    getQueryParams(QUERY_PARAMS.orientation.updateOrientationStatus) ===
    "active";

  // handle open update orientation status modal
  const handleOpenOrientationStatusModal = useCallback(
    (status: OrientationStatusType) => {
      updateQueryParams({
        [QUERY_PARAMS.orientation.updateOrientationStatus]: "active",
        [QUERY_PARAMS.orientation.orientationStatus]: status,
      });
    },
    []
  );

  // handle close update orientation status modal
  const handleCloseOrientationStatusModal = useCallback(() => {
    deleteQueryParams([
      QUERY_PARAMS.orientation.updateOrientationStatus,
      QUERY_PARAMS.orientation.orientationStatus,
    ]);
  }, []);

  return {
    isOrientationStatusModalOpen,
    handleCloseOrientationStatusModal,
    handleOpenOrientationStatusModal,
    status: getValidQuerryParams,
  };
};

export default useUpdateOrientationStatusModal;
