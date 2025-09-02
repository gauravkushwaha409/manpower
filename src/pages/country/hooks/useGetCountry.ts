import { useGetDataQuery } from "@/api/api";

const useGetCountry = () => {
  const { data, isLoading, isError, isSuccess } = useGetDataQuery({
    url: "/country",
    params: {},
    tag: "Country",
  });

  return {
    data,
    isLoading,
    isError,
    isSuccess,
  };
};

export default useGetCountry;
