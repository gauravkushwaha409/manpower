import { useFormik } from 'formik';
import type { ApiResponse } from '@/api/api.error';
import { showErrorMessage, showSuccessMessage } from '@/utils/toast';
import handleErrors from '@/api/api.error';
import { useGetOrganizationSettingsDetails } from './useGetOrganizationSettingsDetails';
import { usePostDataMutation } from '@/api/api';
import {
  organizationSettingsValidationSchema,
  OrganizationSettingsValidationSchemaType,
} from '../schema/organizationSettingsValidationSchema';
import { endpoints } from '@/api/endpoints';
// import { apiTags } from '@/constant/tag';

interface IProps {
  updateId: string;
}

export const useUpdateOrganizationSettings = ({ updateId }: IProps) => {
  const [
    updateOrganizationSettings,
    { isError, isLoading: isGetDetailsLoading, isSuccess },
  ] = usePostDataMutation();
  const { data, isLoading, refetchOrganizationSettingsDetails } =
    useGetOrganizationSettingsDetails({
      id: updateId,
    });
  const initialValues: OrganizationSettingsValidationSchemaType = {
    companyName: data?.companyName || '',
    liscenseNumber: data?.liscenseNumber || '',
    panNumber: data?.panNumber || '',
    slogan: data?.slogan || '',
    phoneNumber: data?.phoneNumber || '',
    country: data?.country || '',
    state: data?.state || '',
    municipality: data?.municipality || '',
    website: data?.website || '',
    copyRight: data?.copyRight || '',
    headerLogo: data?.headerLogo || '',
    footerLogo: data?.footerLogo || '',
    socialMedia: data?.socialMedia || '',
    email: data?.email || '',
  };
  const formik = useFormik<OrganizationSettingsValidationSchemaType>({
    initialValues,
    enableReinitialize: true,
    validationSchema: organizationSettingsValidationSchema,
    onSubmit: async (values) => {
      const formData = new FormData();
      formData.append('companyName', values.companyName);
      formData.append('liscenseNumber', values.liscenseNumber);
      formData.append('panNumber', values.panNumber);
      formData.append('slogan', values.slogan);
      formData.append('phoneNumber', values.phoneNumber);
      formData.append('country', values.country);
      formData.append('state', values.state);
      formData.append('municipality', values.municipality);
      formData.append('website', values.website);
      formData.append('copyRight', values.copyRight);
      formData.append('headerLogo', values.headerLogo);
      formData.append('footerLogo', values.footerLogo);
      formData.append('socialMedia', values.socialMedia);
      formData.append('email', values.email);
      const response = (await updateOrganizationSettings({
        url: endpoints.organizationSettings.update.replace('id', updateId),
        data: formData,
        // invalidateTag: [apiTags.getAllOrganizationSettings],
      })) as ApiResponse;

      if (response?.data?.message) {
        showSuccessMessage(response?.data?.message);
        formik.resetForm();
        refetchOrganizationSettingsDetails();
      }
      if (response?.error?.data?.message)
        showErrorMessage(response?.error?.data?.message);
      if (response?.error?.data?.errors)
        handleErrors(response, formik.setErrors);
    },
  });
  return { formik, isError, isLoading, isSuccess, isGetDetailsLoading };
};
