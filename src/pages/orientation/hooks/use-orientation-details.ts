import { useGetDataQuery } from "@/api/api";
import { endpoints } from "@/api/endpoints";
import { apiTags } from "@/constant/tag";
import { IApiDetailsResponse } from "@/interface/apiResponse.interface";
import { OrientationStatusType } from "../schema/orientation-schema";

interface IOrientationDetails {
  id: string;
  candidate_name: string;
  candidate_job: string;
  employer_name: string;
  institute_name: string;
  orientation_date: string;
  orientation_location: string;
  orientation_status: OrientationStatusType;
}
type OrientationDetailsResponse = IApiDetailsResponse<IOrientationDetails>;

const useOrientationDetails = ({ id }: { id: string | null | undefined }) => {
  const { data, isLoading } = useGetDataQuery<{
    data: OrientationDetailsResponse;
    isLoading: boolean;
  }>(
    {
      url: endpoints.orientation.update.replace(":id", id ?? ""),
      tag: apiTags.orientation.details,
    },
    {
      skip: !id,
    }
  );

  return { orientationDetails: data, isLoading };
};
export default useOrientationDetails;
