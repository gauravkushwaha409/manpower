import { useFormik } from "formik";
import {
  preApprovalDofeValidationSchema,
  PreApprovalDofeValidationSchemaType,
} from "@/pages/preApprovalDofe/schema/preApprovalDofeValidationSchema";

const useCreatePreApprovalDofe = () => {
  const initialValues: PreApprovalDofeValidationSchemaType = {
    company: "",
    preApprovalDate: "",
    ltNumber: "",
    chalanNumber: "",
  };

  const formik = useFormik<PreApprovalDofeValidationSchemaType>({
    initialValues,
    validationSchema: preApprovalDofeValidationSchema,
    onSubmit: async () => {},
  });

  return {
    formik,
  };
};

export default useCreatePreApprovalDofe;
