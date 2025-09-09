import { useGetDataQuery } from '@/api/api';
import useStringState from '@/utils/useStringState';
import { OrganizatioinSettingsListItemResponse } from '../Interface/IOrganizationSettings';
import { apiTags } from '@/constant/tag';
import { endpoints } from '@/api/endpoints';

export const useGetOrganizatioSettings = () => {
  const updateId = useStringState();

  const { data, isError, isLoading, isSuccess } = useGetDataQuery<{
    data: OrganizatioinSettingsListItemResponse;
    isLoading: boolean;
    isError: boolean;
    isSuccess: boolean;
  }>({
    url: endpoints?.organizationSettings.list,
    tag: apiTags.getAllOrganizationSettings,
  });

  return {
    organizationSettingsData: data,
    isError,
    isLoading,
    isSuccess,
    updateId,
  };
};
