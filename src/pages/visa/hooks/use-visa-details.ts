import { useGetDataQuery } from "@/api/api";
import { endpoints } from "@/api/endpoints";
import { apiTags } from "@/constant/tag";
import { IApiDetailsResponse } from "@/interface/apiResponse.interface";

interface IVisaDetails {
  id: string;
  candidate_name: string;
  candidate_job: string;
  visa_type: string;
  application_date: string;
  approval_date: string;
  visa_expire: string;
  status: string;
  visa_file: string;
}
type VisaDetailsResponse = IApiDetailsResponse<IVisaDetails>;

const useVisaDetails = ({ id }: { id: string | null | undefined }) => {
  const { data, isLoading } = useGetDataQuery<{
    data: VisaDetailsResponse;
    isLoading: boolean;
  }>(
    {
      url: endpoints.visa.update.replace(":id", id ?? ""),
      tag: apiTags.visa.details,
    },
    {
      skip: !id,
    }
  );

  return { visaDetails: data, isLoading };
};
export default useVisaDetails;
