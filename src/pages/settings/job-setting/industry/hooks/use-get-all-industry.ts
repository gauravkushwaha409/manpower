import { useGetDataQuery } from "@/api/api";
import { endpoints } from "@/api/endpoints";
import { apiTags } from "@/constant/tag";
import { usePagination } from "@/hooks/usePagination";
import { IPaginationResponse } from "@/interface/apiResponse.interface";
import { useState } from "react";

export interface IndustryListItem {
  id: string;
  industry: string;
}
type IndustryListResponse = IPaginationResponse<IndustryListItem>;
const useGetAllIndustry = () => {
  const { pagination } = usePagination();
  const [rowSelection, setRowSelection] = useState({});
  const { data, isLoading } = useGetDataQuery<{
    data: IndustryListResponse;
    isLoading: boolean;
  }>({
    url: endpoints.industry.list,
    params: { page: pagination.pageIndex, page_size: pagination.pageSize },
    tag: apiTags.industry.list,
  });

  return { industryResponse: data, isLoading, rowSelection, setRowSelection };
};

export const industryData: IndustryListItem[] = [
  {
    id: "1",
    industry: "Information Technology",
  },
  {
    id: "2",
    industry: "Healthcare & Medical",
  },
  {
    id: "3",
    industry: "Manufacturing & Engineering",
  },
  {
    id: "4",
    industry: "Construction",
  },
  {
    id: "5",
    industry: "Retail & Hospitality",
  },
  {
    id: "6",
    industry: "Professional Services",
  },
  {
    id: "7",
    industry: "Administrative & Support",
  },
];

export default useGetAllIndustry;
