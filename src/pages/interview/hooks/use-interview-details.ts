import { useGetDataQuery } from "@/api/api";
import { endpoints } from "@/api/endpoints";
import { apiTags } from "@/constant/tag";
import { IApiDetailsResponse } from "@/interface/apiResponse.interface";

interface IInterviewDetails {
  id: string;
  candidate_name: string;
}
type InterviewDetailsResponse = IApiDetailsResponse<IInterviewDetails>;

const useInterviewDetails = ({ id }: { id: string | null | undefined }) => {
  const { data, isLoading } = useGetDataQuery<{
    data: InterviewDetailsResponse;
    isLoading: boolean;
  }>(
    {
      url: endpoints.interview.update.replace(":id", id ?? ""),
      tag: apiTags.interview.details,
    },
    {
      skip: !id,
    }
  );

  return { interviewDetails: data, isLoading };
};
export default useInterviewDetails;
