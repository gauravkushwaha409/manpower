import { useGetDataQuery } from "@/api/api";

const useGetEmbassyInterview = () => {
  const { data, isLoading, isError, isSuccess } = useGetDataQuery({
    url: "/embassy-interview",
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

export default useGetEmbassyInterview;
