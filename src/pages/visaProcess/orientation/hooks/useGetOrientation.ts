import { useGetDataQuery } from "@/api/api";

const useGetOrientation = () => {
  const { data, isLoading, isError, isSuccess } = useGetDataQuery({
    url: "/orientation",
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

export default useGetOrientation;
