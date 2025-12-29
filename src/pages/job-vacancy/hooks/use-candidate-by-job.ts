import { useGetDataQuery } from "@/api/api";
import { endpoints } from "@/api/endpoints";
import { apiTags } from "@/constant/tag";
import {
  useDeleteSearchParams,
  useGetSearchParams,
  useUpdateSearchParams,
} from "@/hooks/updateSearchParams";
import { IPaginationResponse } from "@/interface/apiResponse.interface";

const candidateByJobParams = "candidate-by-job";

export interface ICandidateListItemByJob {
  id: string;
  first_name: string;
  last_name: string;
  phone_no: string;
  passport_no: string;
  address: string;
  company_name: string;
}
type CandidateByJobResponse = IPaginationResponse<ICandidateListItemByJob>;

const useCandidateByJob = () => {
  const { data, isLoading } = useGetDataQuery<{
    data: CandidateByJobResponse;
    isLoading: boolean;
  }>({
    url: endpoints.jobVacancy.candidateByJob,
    tag: apiTags.jobVacancy.candidateByJobVacancy,
  });
  return { response: data, isLoading };
};

export default useCandidateByJob;

// Handle the Modal of job click
export const useCandidateByJobModal = () => {
  const updateSearchParams = useUpdateSearchParams();
  const deleteSearchParams = useDeleteSearchParams();
  const getSearchParams = useGetSearchParams();
  const isCandidateByJobOpen = getSearchParams(candidateByJobParams);

  const handleOpenCandidateByJob = (jobId: string) => {
    updateSearchParams({ [candidateByJobParams]: jobId });
  };
  const handleCloseCandidateByJob = () => {
    deleteSearchParams([candidateByJobParams]);
  };

  return {
    handleOpenCandidateByJob,
    handleCloseCandidateByJob,
    isCandidateByJobOpen: !!isCandidateByJobOpen,
  };
};
