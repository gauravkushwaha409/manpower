import { useGetDataQuery, useUpdateDataMutation } from "@/api/api";
import { useFormik } from "formik";
import {
  companyValidationSchema,
  CompanyValidationSchemaType,
} from "../schema/companyValidationSchema";

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

  const initial: CompanyValidationSchemaType = data;

  const initialValues: CompanyValidationSchemaType = {
    id: initial?.id || "",
    recruitment_company: initial?.recruitment_company || "",
    license_number: initial?.license_number || "",
    country: initial?.country || "",
    state: initial?.state || "",
    city: initial?.city || "",
    street: initial?.street || "",
    area: initial?.area || "",
    currency: initial?.currency || "",
    contact_number: initial?.contact_number || "",
    email: initial?.email || "",
    office_address: initial?.office_address || "",
    website_url: initial?.website_url || "",
  };

  const formik = useFormik({
    initialValues,
    validationSchema: companyValidationSchema,
    enableReinitialize: true,
    onSubmit: async (values) => {
      updateCompany({
        data: values,
        url: `/company/${values.id}`,
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
