import { useGetDataQuery } from "@/api/api";
import { endpoints } from "@/api/endpoints";
import { apiTags } from "@/constant/tag";
import { IApiDetailsResponse } from "@/interface/apiResponse.interface";
import { shramSchemaType } from "../schema/shram-schema";

interface IShramDetails {
  id: string;
  candidate_name: string;
  candidate_job: string;
  employer_name: string;
  ols_reference_number: string;
  approval_date: string;
  approval_file: string;
  status: shramSchemaType;
}
type ShramDetailsResponse = IApiDetailsResponse<IShramDetails>;

const useShramDetails = ({ id }: { id: string | null | undefined }) => {
  const { data, isLoading } = useGetDataQuery<{
    data: ShramDetailsResponse;
    isLoading: boolean;
  }>(
    {
      url: endpoints.shram.update.replace(":id", id ?? ""),
      tag: apiTags.shram.details,
    },
    {
      skip: !id,
    }
  );

  return { shramDetails: data, isLoading };
};
export default useShramDetails;
