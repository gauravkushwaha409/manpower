import {
  IApiDetailsResponse,
  IPaginationResponse,
} from "@/interface/apiResponse.interface";

export interface IPreApprovalDofeListItem {
  id: string;
  company: {
    recruitmentCompany: string;
    recruitment_company: string;
    liscenseNumber: string;
    companyAddress: {
      country: string;
      state: string;
      city: string;
      street: string;
      area: string;
      currency: string;
    };
    recruimentPerson: {
      contactNumber: string;
      email: string;
      officeAddress: string;
      website: string;
    };
  };
  preApprovalDate: string;
  ltNumber: string;
  chalanNumber: string;
}

export type PreApprovalDofeListItemResponse =
  IPaginationResponse<IPreApprovalDofeListItem>;
export type PreApprovalDofeDetailsResponse =
  IApiDetailsResponse<IPreApprovalDofeListItem>;
