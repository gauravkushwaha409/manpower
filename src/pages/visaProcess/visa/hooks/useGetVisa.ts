import { useGetDataQuery } from "@/api/api";

const useGetVisa = () => {
  const { data, isLoading, isError, isSuccess } = useGetDataQuery({
    url: "/visa",
    params: {},
    tag: "",
  });

  return {
    data,
    isLoading,
    isError,
    isSuccess,
  };
};

export default useGetVisa;
