import useQueryParams from "./use-query-params";

export const useUpdateModal = (key: string = "update-id") => {
  const { updateQueryParams, deleteQueryParams, getQueryParams } =
    useQueryParams();

  const isOpen = Boolean(getQueryParams(key));
  const updateId = getQueryParams(key);

  const handleOpenModal = (id: string) => {
    updateQueryParams({ [key]: id });
  };

  const handleCloseModal = () => {
    deleteQueryParams([key]);
  };

  return {
    isOpen,
    updateId,
    handleOpenModal,
    handleCloseModal,
  };
};
