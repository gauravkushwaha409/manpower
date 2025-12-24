import { useSearchParams } from "react-router-dom";

export const useUpdateSearchParams = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const updateParams = (
    newParams: Record<string, string>,
    deleteParams?: string[]
  ) => {
    deleteParams?.forEach((key) => {
      searchParams.delete(key);
    });
    const currentParams = Object.fromEntries(searchParams.entries());
    setSearchParams({ ...currentParams, ...newParams });
  };
  return updateParams;
};

export const useDeleteSearchParams = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const deleteParams = (keysToDelete: string[]) => {
    const newParams = new URLSearchParams(searchParams);

    keysToDelete.forEach((key) => {
      newParams.delete(key);
    });
    
    setSearchParams(newParams);
  };

  return deleteParams;
};

export const useGetSearchParams = () => {
  const [searchParams] = useSearchParams();
  const getSearchParamsValue = (key: string, defaultValue?: string) => {
    return searchParams.get(key) ?? defaultValue;
  };
  return getSearchParamsValue;
};
