import { useFormik } from "formik";
import { usePostDataMutation } from "@/api/api";
import {
  dofeValidationSchema,
  DOFEValidationSchemaType,
} from "../schema/dofeValidationSchema";

const useCreateDOFE = () => {
  const [
    createDOFE,
    {
      isError: isDOFEError,
      isLoading: isDOFELoading,
      isSuccess: isDOFESuccess,
    },
  ] = usePostDataMutation();

  const initialValues: DOFEValidationSchemaType = {
    id: "",
    candidate_name: "",
    sticker_no: "",
    job_vacancy: "",
    country: "",
    company: "",
  };

  const formik = useFormik<DOFEValidationSchemaType>({
    initialValues,
    validationSchema: dofeValidationSchema,
    onSubmit: async (values) => {
      await createDOFE({
        url: "/dofe",
        data: values,
        invalidateTag: "",
      });
    },
  });

  return {
    formik,
    isDOFELoading,
    isDOFEError,
    isDOFESuccess,
  };
};

export default useCreateDOFE;
