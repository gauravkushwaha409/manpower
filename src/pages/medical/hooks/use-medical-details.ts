import { useGetDataQuery } from "@/api/api";
import { endpoints } from "@/api/endpoints";
import { apiTags } from "@/constant/tag";
import { IApiDetailsResponse } from "@/interface/apiResponse.interface";

interface IMedicalDetails {
  id: string;
  candidate_name: string;
}
type MedicalDetailsResponse = IApiDetailsResponse<IMedicalDetails>;

const useMedicalDetails = ({ id }: { id: string | null | undefined }) => {
  const { data, isLoading } = useGetDataQuery<{
    data: MedicalDetailsResponse;
    isLoading: boolean;
  }>(
    {
      url: endpoints.medical.update.replace(":id", id ?? ""),
      tag: apiTags.medical.details,
    },
    {
      skip: !id,
    }
  );

  return { medicalDetails: data, isLoading };
};
export default useMedicalDetails;
