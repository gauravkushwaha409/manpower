import { useGetDataQuery } from "@/api/api";

const useGetDOFE = () => {
  const { data, isLoading, isError, isSuccess } = useGetDataQuery({
    url: "/dofe",
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

export default useGetDOFE;
