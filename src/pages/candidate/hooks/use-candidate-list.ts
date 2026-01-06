import { useGetDataQuery } from "@/api/api";
import { endpoints } from "@/api/endpoints";
import { apiTags } from "@/constant/tag";
import { usePagination } from "@/hooks/usePagination";
import useSearch from "@/hooks/useSearch";
import Candidate from "@/types/candidate.types";

const useCandidateList = () => {
  const { pagination } = usePagination();
  const { get } = useSearch();

  const { data, isLoading } = useGetDataQuery<{
    data: Candidate.List;
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
