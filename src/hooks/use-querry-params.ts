import { useSearchParams } from "react-router-dom";

const useQuerryParams = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  //   Update Querry Params
  const updateQuerryParams = (
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
  const deleteQuerryParams = (keysToDelete: string[]) => {
    const newParams = new URLSearchParams(searchParams);
    keysToDelete.forEach((key) => {
      newParams.delete(key);
    });
    setSearchParams(newParams);
  };

  //   Get Search Querry Params
  const getQuerryParams = (key: string, defaultValue?: string | null) => {
    return searchParams.get(key) ?? defaultValue;
  };
  return { updateQuerryParams, deleteQuerryParams, getQuerryParams };
};

export default useQuerryParams;
