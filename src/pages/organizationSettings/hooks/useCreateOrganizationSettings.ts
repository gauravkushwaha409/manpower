import { useFormik } from 'formik';
import { usePostDataMutation } from '@/api/api';
import {
  organizationSettingsValidationSchema,
  OrganizationSettingsValidationSchemaType,
} from '../schema/organizationSettingsValidationSchema';
import { endpoints } from '@/api/endpoints';
import { apiTags } from '@/constant/tag';

const useCreateOrganizationSettings = () => {
  const [
    createOrganizationSettings,
    {
      isError: isCountryError,
      isLoading: isCountryLoading,
      isSuccess: isCountrySuccess,
    },
  ] = usePostDataMutation();

  const initialValues: OrganizationSettingsValidationSchemaType = {
    companyName: '',
    liscenseNumber: '',
    panNumber: '',
    slogan: '',
    phoneNumber: '',
    country: '',
    state: '',
    municipality: '',
    website: '',
    copyRight: '',
    headerLogo: '',
    footerLogo: '',
    socialMedia: '',
    email: '',
  };

  const formik = useFormik<OrganizationSettingsValidationSchemaType>({
    initialValues,
    validationSchema: organizationSettingsValidationSchema,
    onSubmit: async (values) => {
      await createOrganizationSettings({
        url: endpoints.organizationSettings.create,
        data: values,
        invalidateTag: apiTags.getAllOrganizationSettings,
      });
    },
  });

  return {
    formik,
    isCountryError,
    isCountryLoading,
    isCountrySuccess,
  };
};

export default useCreateOrganizationSettings;
