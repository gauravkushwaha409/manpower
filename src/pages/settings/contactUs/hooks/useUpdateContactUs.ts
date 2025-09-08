import { useGetDataQuery, useUpdateDataMutation } from "@/api/api";
import { useFormik } from "formik";
import {
  contactUsValidationSchema,
  ContactUsValidationSchemaType,
} from "../schema/contactUsValidationSchema";

const useUpdateContactUs = () => {
  const [
    updateContactUs,
    {
      isError: isUpdateContactUsSuccess,
      isLoading: isUpdateContactUsLoading,
      isSuccess: isUpdateContactUsError,
    },
  ] = useUpdateDataMutation();

  const {
    data,
    isError: isGetContactUsDetailsError,
    isLoading: isGetContactUsDetailsLoading,
    isSuccess: isGetContactUsDetailsSuccess,
  } = useGetDataQuery({
    url: "/contact-us",
    params: {},
    tag: "",
  });

  const initial: ContactUsValidationSchemaType = data;

  const initialValues: ContactUsValidationSchemaType = {
    id: initial?.id || "",
    contactEmail: initial?.contactEmail || "",
    contactNumber: initial?.contactNumber || "",
    contactName: initial?.contactName || "",
  };

  const formik = useFormik({
    initialValues,
    validationSchema: contactUsValidationSchema,
    enableReinitialize: true,
    onSubmit: async (values) => {
      updateContactUs({
        data: values,
        url: `/contact-us/${values?.id}`,
        invalidateTag: "",
      });
    },
  });

  return {
    data,
    formik,
    updateContactUs,
    isGetContactUsDetailsError,
    isGetContactUsDetailsLoading,
    isGetContactUsDetailsSuccess,
    isUpdateContactUsSuccess,
    isUpdateContactUsLoading,
    isUpdateContactUsError,
  };
};

export default useUpdateContactUs;
