import { useUpdateDataMutation } from "@/api/api";
import { endpoints } from "@/api/endpoints";
import { apiTags } from "@/constant/tag";
import {
  companyValidationSchema,
  CompanyValidationSchemaType,
} from "@/pages/company/schema/companyValidationSchema";
import { useFormik } from "formik";
import { useParams } from "react-router-dom";
import useCompanyDetails from "./use-company-details";

const useUpdateCompany = () => {
  const { id } = useParams();
  const [updateCompany, { isLoading }] = useUpdateDataMutation();

  const { isLoading: isInitialLoading } = useCompanyDetails({ id: id ?? "" });
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
        url: endpoints.company.update.replace(":id", id ?? ""),
        invalidateTag: [apiTags.company.list, apiTags.company.details],
      });
    },
  });

  return {
    formik,
    isLoading,
    isInitialLoading,
  };
};

export default useUpdateCompany;
