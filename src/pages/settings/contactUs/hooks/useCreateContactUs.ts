import { useFormik } from "formik";
import { usePostDataMutation } from "@/api/api";
import {
  contactUsValidationSchema,
  ContactUsValidationSchemaType,
} from "../schema/contactUsValidationSchema";

const useCreateContactUs = () => {
  const [
    createContactUs,
    {
      isError: isContactUsError,
      isLoading: isContactUsLoading,
      isSuccess: isContactUsSuccess,
    },
  ] = usePostDataMutation();

  const initialValues: ContactUsValidationSchemaType = {
    id: "",
    contactName: "",
    contactNumber: "",
    contactEmail: "",
  };

  const formik = useFormik<ContactUsValidationSchemaType>({
    initialValues,
    validationSchema: contactUsValidationSchema,
    onSubmit: async (values) => {
      await createContactUs({
        url: "/contact-us",
        data: values,
        invalidateTag: "",
      });
    },
  });

  return {
    formik,
    isContactUsError,
    isContactUsLoading,
    isContactUsSuccess,
  };
};

export default useCreateContactUs;
