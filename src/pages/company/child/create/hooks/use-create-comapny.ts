import { useFormik } from "formik";
import { usePostDataMutation } from "@/api/api";
import {
  companyValidationSchema,
  CompanyValidationSchemaType,
} from "../../../schema/companyValidationSchema";
import { endpoints } from "@/api/endpoints";
import { apiTags } from "@/constant/tag";

const useCreateCompany = () => {
  const [
    createCompany,
    {
      isError: isCompanyError,
      isLoading: isCompanyLoading,
      isSuccess: isCompanySuccess,
    },
  ] = usePostDataMutation();

  const initialValues: CompanyValidationSchemaType = {
    recruitment_company: "",
    country: "",
    sector: "",
    currency: "",
    license_number_name: "",
    license_number: "",
    license_issue_by: "",
    license_image: "",
    state_region: "",
    city: "",
    street: "",
    area: "",
    contact_person_name: "",
    contact_number: "",
    email: "",
    office_address: "",
    website_url: "",
  };

  const formik = useFormik<CompanyValidationSchemaType>({
    initialValues,
    validationSchema: companyValidationSchema,
    onSubmit: async (values) => {
      await createCompany({
        url: endpoints.company.create,
        data: values,
        invalidateTag: [apiTags.company.list],
      });
    },
  });

  return {
    formik,
    isCompanyError,
    isCompanyLoading,
    isCompanySuccess,
  };
};

export default useCreateCompany;
