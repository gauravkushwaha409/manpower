import { useGetDataQuery } from "@/api/api";
import { endpoints } from "@/api/endpoints";
import { apiTags } from "@/constant/tag";
import { usePagination } from "@/hooks/usePagination";
import useSearch from "@/hooks/useSearch";
import { IPaginationResponse } from "@/interface/apiResponse.interface";

export interface ICandidateListItem {
  id: string;
  first_name: string;
  last_name: string;
  passport_no: string;
  applied_country: string;
  company_name: string;
  job_vacancy: string;
  interview_process: string;
}
type CandidateListResponse = IPaginationResponse<ICandidateListItem>;

const useCandidateList = () => {
  const { pagination } = usePagination();
  const { get } = useSearch();

  const { data, isLoading } = useGetDataQuery<{
    data: CandidateListResponse;
    isLoading: boolean;
  }>({
    url: endpoints.candidate.list,
    params: {
      page: pagination.pageIndex,
      page_size: pagination.pageSize,
      search: get(),
    },
    tag: apiTags.candidate.list,
  });
  return { candidateList: data, isLoading };
};

export default useCandidateList;
