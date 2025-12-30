import { useGetDataQuery } from "@/api/api";
import { endpoints } from "@/api/endpoints";
import { apiTags } from "@/constant/tag";
import { IApiDetailsResponse } from "@/interface/apiResponse.interface";
import {
  InterviewModeType,
  InterviewResultType,
} from "../schema/interview-schema";

interface IInterviewDetails {
  id: string;
  candidate_name: string;
  candidate_job: string;
  employer_name: string;
  interview_date: string;
  interview_mode: InterviewModeType;
  interview_location: string;
  interviewer_name: string;
  remarks: string;
  result: InterviewResultType;
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
