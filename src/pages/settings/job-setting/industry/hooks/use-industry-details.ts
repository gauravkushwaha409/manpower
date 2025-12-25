import { useGetDataQuery } from "@/api/api";
import { endpoints } from "@/api/endpoints";
import { apiTags } from "@/constant/tag";
import { IApiDetailsResponse } from "@/interface/apiResponse.interface";

interface IndustryDetails {
  id: string;
  industry: string;
}

type IndustryDetailsResponse = IApiDetailsResponse<IndustryDetails>;

const useIndustryDetails = ({ id }: { id: string }) => {
  const { data, isLoading } = useGetDataQuery<{
    data: IndustryDetailsResponse;
    isLoading: boolean;
  }>({
    url: endpoints.industry.details.replace(":id", id),
    tag: apiTags.industry.details,
  });

  return { industryDetails: data, isLoading };
};
export default useIndustryDetails;
