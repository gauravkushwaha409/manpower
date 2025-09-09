import { useGetDataQuery } from '@/api/api';
import { endpoints } from '@/api/endpoints';

interface IProps {
  id: string;
}

export const useGetOrganizationSettingsDetails = ({ id }: IProps) => {
  const {
    data,
    isLoading,
    isError,
    isSuccess,
    refetch: refetchOrganizationSettingsDetails,
  } = useGetDataQuery<{
    data: any;
    isLoading: boolean;
    isError: boolean;
    isSuccess: boolean;
  }>({
    url: endpoints.organizationSettings.details.replace('id', id),
  });
  return {
    data,
    isLoading,
    isError,
    isSuccess,
    refetchOrganizationSettingsDetails,
  };
};
