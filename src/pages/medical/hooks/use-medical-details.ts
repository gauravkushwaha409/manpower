import { useGetDataQuery } from "@/api/api";
import { endpoints } from "@/api/endpoints";
import { apiTags } from "@/constant/tag";
import Medical from "@/types/medical.types";

const useMedicalDetails = ({ id }: { id: string | null | undefined }) => {
  const { data, isLoading } = useGetDataQuery<{
    data: Medical.Details;
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
