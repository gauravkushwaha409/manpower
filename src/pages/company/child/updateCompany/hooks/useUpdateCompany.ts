import { useGetDataQuery, useUpdateDataMutation } from "@/api/api";
import {
  companyValidationSchema,
  CompanyValidationSchemaType,
} from "@/pages/company/schema/companyValidationSchema";
import { useFormik } from "formik";

const useUpdateCompany = () => {
  const [
    updateCompany,
    {
      isError: isUpdateCompanyError,
      isLoading: isUpdateCompanyLoading,
      isSuccess: isUpdateCompanySuccess,
    },
  ] = useUpdateDataMutation();

  const {
    data,
    isError: isGetCompanyDetailsError,
    isLoading: isGetCompanyDetailsLoading,
    isSuccess: isGetCompanyDetailsSuccess,
  } = useGetDataQuery({ url: "/company", params: {}, tag: "" });

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

  const formik = useFormik({
    initialValues,
    validationSchema: companyValidationSchema,
    enableReinitialize: true,
    onSubmit: async (values) => {
      updateCompany({
        data: values,
        url: ``,
        invalidateTag: "",
      });
    },
  });

  return {
    data,
    formik,
    isGetCompanyDetailsError,
    isGetCompanyDetailsLoading,
    isGetCompanyDetailsSuccess,
    isUpdateCompanySuccess,
    isUpdateCompanyLoading,
    isUpdateCompanyError,
  };
};

export default useUpdateCompany;
