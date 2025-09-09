import * as Yup from 'yup';

export const organizationSettingsValidationSchema = Yup.object().shape({
  companyName: Yup.string().required('Company Name is required'),
  liscenseNumber: Yup.string().required('Liscense Number is required'),
  panNumber: Yup.string().required('PAN Number is required'),
  slogan: Yup.string().required('Slogan is required'),
  phoneNumber: Yup.string().required('Phone Number is required'),
  country: Yup.string().required('Country is required'),
  state: Yup.string().required('State is required'),
  municipality: Yup.string().required('Municipality is required'),
  website: Yup.string().required('Website is required'),
  copyRight: Yup.string().required('Copy Right is required'),
  headerLogo: Yup.string().required('Header Logo is required'),
  footerLogo: Yup.string().required('Footer Logo is required'),
  socialMedia: Yup.string().required('Social Media is required'),
  email: Yup.string().required('Email is required'),
});

export type OrganizationSettingsValidationSchemaType = Yup.InferType<
  typeof organizationSettingsValidationSchema
>;
