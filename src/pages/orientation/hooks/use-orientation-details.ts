import { useGetDataQuery } from "@/api/api";
import { endpoints } from "@/api/endpoints";
import { apiTags } from "@/constant/tag";
import Orientation from "@/types/orientation.types";

const useOrientationDetails = ({ id }: { id: string | null | undefined }) => {
  const { data, isLoading } = useGetDataQuery<{
    data: Orientation.Details;
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
