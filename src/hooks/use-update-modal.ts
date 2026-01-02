import useQueryParams from "./use-query-params";

export const useUpdateModal = () => {
  const { updateQueryParams, deleteQueryParams, getQueryParams } =
    useQueryParams();

  const isOpen =
    getQueryParams("update") === "active" &&
    Boolean(getQueryParams("update-id"));

  const updateId = getQueryParams("update-id");

  const handleOpenModal = (id: string) => {
    updateQueryParams({
      update: "active",
      "update-id": id,
    });
  };

  const handleCloseModal = () => {
    deleteQueryParams(["update", "update-id"]);
  };

  return {
    isOpen,
    updateId,
    handleOpenModal,
    handleCloseModal,
  };
};
