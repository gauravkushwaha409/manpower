import { useGetDataQuery } from "@/api/api";
import { endpoints } from "@/api/endpoints";
import { apiTags } from "@/constant/tag";
import { IApiDetailsResponse } from "@/interface/apiResponse.interface";

interface ISubCategoryDetails {
  id: string;
  industry: string;
  category: string;
  subCategory: string;
  icon: string;
}
type SubCategoryDetailsResponse = IApiDetailsResponse<ISubCategoryDetails>;
const useSubCategoryDetails = ({ id }: { id: string | undefined }) => {
  const { data, isLoading } = useGetDataQuery<{
    data: SubCategoryDetailsResponse;
    isLoading: boolean;
  }>(
    {
      url: endpoints.subCategory.details.replace(":id", id ?? ""),
      tag: apiTags.subCategory.details,
    },
    {
      skip: !id,
    }
  );

  return { subCategoryDetails: data, isLoading };
};

export default useSubCategoryDetails;
