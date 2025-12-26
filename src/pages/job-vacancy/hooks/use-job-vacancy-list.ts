import { useGetDataQuery } from "@/api/api";
import { endpoints } from "@/api/endpoints";
import { apiTags } from "@/constant/tag";
import { usePagination } from "@/hooks/usePagination";
import useSearch from "@/hooks/useSearch";
import { IPaginationResponse } from "@/interface/apiResponse.interface";
import { useState } from "react";

export interface IJobVacancyListItem {
  id: string;
  job_title: string;
  male: string;
  female: string;
  basic_salary_nrp: string;
  basic_salary_aed: string;
  working_hours: string;
  working_days: string;
  contract_period: string;
  working_city: string;
  experience_required: boolean;
  experience_years: string;
  academic_qualification: string;
}
type JobVacancyListResponse = IPaginationResponse<IJobVacancyListItem>;

const useJobVacancyList = () => {
  const [rowSelection, setRowSeletion] = useState({});
  const { pagination } = usePagination();
  const { get } = useSearch();
  const { data, isLoading } = useGetDataQuery<{
    data: JobVacancyListResponse;
    isLoading: boolean;
  }>({
    url: endpoints.jobVacancy.list,
    params: {
      page: pagination.pageIndex,
      page_size: pagination.pageSize,
      search: get(),
    },
    tag: apiTags.jobVacancy.list,
  });

  return { jobVacancyResponse: data, isLoading, rowSelection, setRowSeletion };
};

export default useJobVacancyList;
