import { useGetDataQuery } from "@/api/api";

const useGetMedicalReport = () => {
  const { data, isLoading, isError, isSuccess } = useGetDataQuery({
    url: "/medical-report",
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

export default useGetMedicalReport;
