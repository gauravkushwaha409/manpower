import type {
  IApiDetailsResponse,
  IPaginationResponse,
} from '@/interface/apiResponse.interface';

export interface IOrganizationSettingsListItem {
  id: string;
  companyName: string;
  liscenseNumber: string;
  panNumber: string;
  slogan: string;
  phoneNumber: string;
  country: string;
  state: string;
  municipality: string;
  website: string;
  copyRight: string;
  headerLogo: string;
  footerLogo: string;
  socialMedia: string;
  email: string;
}

export type OrganizatioinSettingsListItemResponse =
  IPaginationResponse<IOrganizationSettingsListItem>;

export type OrganizationSettingsDetailsResponse =
  IApiDetailsResponse<IOrganizationSettingsListItem>;
