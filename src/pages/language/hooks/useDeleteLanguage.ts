import { useDeleteDataMutation } from "@/api/api";

const useDeleteLanguage = async (id: number) => {
  const [deleteLanguage, { isError, isLoading, isSuccess }] =
    useDeleteDataMutation();

  {
    await deleteLanguage({
      url: `/languages/${id}`,
    });
  }

  return {
    isError,
    isLoading,
    isSuccess,
  };
};

export default useDeleteLanguage;
