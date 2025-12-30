import useQueryParams from "./use-query-params";

const useQueryModal = (key: string) => {
  const { updateQueryParams, deleteQueryParams, getQueryParams } =
    useQueryParams();

  const isOpen = Boolean(getQueryParams(key));

  const open = () => {
    updateQueryParams({ [key]: "active" });
  };

  const close = () => {
    deleteQueryParams([key]);
  };

  return { isOpen, open, close };
};

export default useQueryModal;
