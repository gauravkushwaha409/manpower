import { useSearchParams } from "react-router-dom";

const useQueryParams = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  //   Update Querry Params
  const updateQueryParams = (
    newParams: Record<string, string>,
    deleteParams?: string[]
  ) => {
    deleteParams?.forEach((key) => {
      searchParams.delete(key);
    });
    const currentParams = Object.fromEntries(searchParams.entries());
    setSearchParams({ ...currentParams, ...newParams });
  };

  //   Delete Querry Params
  const deleteQueryParams = (keysToDelete: string[]) => {
    const newParams = new URLSearchParams(searchParams);
    keysToDelete.forEach((key) => {
      newParams.delete(key);
    });
    setSearchParams(newParams);
  };

  //   Get Search Querry Params
  const getQueryParams = (key: string, defaultValue?: string | null) => {
    return searchParams.get(key) ?? defaultValue;
  };
  return { updateQueryParams, deleteQueryParams, getQueryParams };
};

export default useQueryParams;
