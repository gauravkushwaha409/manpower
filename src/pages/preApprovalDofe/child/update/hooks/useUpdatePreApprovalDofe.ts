import { useFormik } from "formik";

import {
  preApprovalDofeValidationSchema,
  PreApprovalDofeValidationSchemaType,
} from "@/pages/preApprovalDofe/schema/preApprovalDofeValidationSchema";

const useUpdatePreApprovalDofe = () => {
  const initialValues: PreApprovalDofeValidationSchemaType = {
    company: "",
    preApprovalDate: "",
    ltNumber: "",
    chalanNumber: "",
  };

  const formik = useFormik({
    initialValues,
    validationSchema: preApprovalDofeValidationSchema,
    enableReinitialize: true,
    onSubmit: async () => {},
  });

  return {
    formik,
  };
};

export default useUpdatePreApprovalDofe;
