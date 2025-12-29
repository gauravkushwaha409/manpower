import { useGetDataQuery } from "@/api/api";
import { endpoints } from "@/api/endpoints";
import { apiTags } from "@/constant/tag";
import {
  useDeleteSearchParams,
  useGetSearchParams,
  useUpdateSearchParams,
} from "@/hooks/updateSearchParams";
import { IPaginationResponse } from "@/interface/apiResponse.interface";

const JOB_BY_CANDIDATE = "job-by-candidate";

export interface IJobListItemByCandidate {
  id: string;
  industry: string;
  category: string;
  sub_category: string;
  job_title: string;
  employer_name: string;
}
type JobByCandidateResponse = IPaginationResponse<IJobListItemByCandidate>;

// this hook fetch the list of job applied by specific candidate
const useJobByCandidate = () => {
  const { data, isLoading } = useGetDataQuery<{
    data: JobByCandidateResponse;
    isLoading: boolean;
  }>({
    url: endpoints.candidate.jobByCandidate,
    tag: apiTags.candidate.jobTitleByCandidate,
  });
  return { response: data, isLoading };
};

export default useJobByCandidate;

// This hook handle open, close of modal that show the list of job of specific candidate
export const useJobByCandidateModal = () => {
  const updateSearchParams = useUpdateSearchParams();
  const deleteSearchParams = useDeleteSearchParams();
  const getSearchParams = useGetSearchParams();

  const isJobByCandidateOpen = getSearchParams(JOB_BY_CANDIDATE);
  const handleOpenJobByCandidate = (candidateId: string) => {
    updateSearchParams({ [JOB_BY_CANDIDATE]: candidateId });
  };

  const handleCloseJobByCandidate = () => {
    deleteSearchParams([JOB_BY_CANDIDATE]);
  };

  return {
    handleOpenJobByCandidate,
    handleCloseJobByCandidate,
    isJobByCandidateOpen: !!isJobByCandidateOpen,
  };
};
