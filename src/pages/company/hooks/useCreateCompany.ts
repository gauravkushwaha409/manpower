import { useFormik } from "formik";
import { usePostDataMutation } from "@/api/api";
import {
  companyValidationSchema,
  CompanyValidationSchemaType,
} from "../schema/companyValidationSchema";

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
    id: "",
    recruitment_company: "",
    license_number: "",
    country: "",
    state: "",
    city: "",
    street: "",
    area: "",
    currency: "",
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
        url: "/industry",
        data: values,
        invalidateTag: "",
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
