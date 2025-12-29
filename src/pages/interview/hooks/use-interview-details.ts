import { useGetDataQuery } from "@/api/api";
import { endpoints } from "@/api/endpoints";
import { apiTags } from "@/constant/tag";
import { IApiDetailsResponse } from "@/interface/apiResponse.interface";
import { InterviewResult } from "../schema/interview-schema";

interface IInterviewDetails {
  id: string;
  candidate: string;
  job: string;
  employer_name: string;
  date: string;
  mode: string;
  interviewer_name: string;
  remarks: string;
  result: InterviewResult;
  created_at: string;
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
