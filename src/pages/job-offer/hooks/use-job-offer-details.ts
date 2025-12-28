import { useGetDataQuery } from "@/api/api";
import { endpoints } from "@/api/endpoints";
import { apiTags } from "@/constant/tag";
import { IApiDetailsResponse } from "@/interface/apiResponse.interface";

interface IJobOfferDetails {
  id: string;
  candidate_name: string;
}
type JobOfferDetailsResponse = IApiDetailsResponse<IJobOfferDetails>;

const useJobOfferDetails = ({ id }: { id: string | null | undefined }) => {
  const { data, isLoading } = useGetDataQuery<{
    data: JobOfferDetailsResponse;
    isLoading: boolean;
  }>(
    {
      url: endpoints.jobOffer.update.replace(":id", id ?? ""),
      tag: apiTags.jobOffer.details,
    },
    {
      skip: !id,
    }
  );

  return { jobOfferDetails: data, isLoading };
};
export default useJobOfferDetails;
