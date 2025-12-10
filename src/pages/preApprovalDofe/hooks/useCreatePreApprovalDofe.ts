import { useFormik } from "formik";
import {  usePostDataMutation } from "@/api/api";
import { endpoints } from "@/api/endpoints";
import { apiTags } from "@/constant/tag";
import { useNavigate } from "react-router-dom";
import handleErrors, { ApiResponse } from "@/api/api.error";
import { showErrorMessage, showSuccessMessage } from "@/utils/toast";
import { PATH } from "@/constant/path";
import {
  preApprovalDofeValidationSchema,
  PreApprovalDofeValidationSchemaType,
} from "../schema/preApprovalDofeValidationSchema";

const useCreatePreApprovalDofe = () => {
  const navigate = useNavigate();

  const [createPreApprovalDofe, { isError, isLoading, isSuccess }] =
    usePostDataMutation();


  const initialValues: PreApprovalDofeValidationSchemaType = {
    company: "",
    preApprovalDate: "",
    ltNumber: "",
    chalanNumber: "",
  };

  const formik = useFormik<PreApprovalDofeValidationSchemaType>({
    initialValues,
    validationSchema: preApprovalDofeValidationSchema,
    onSubmit: async (values) => {
      try {
        const response = await createPreApprovalDofe({
          url: endpoints.preApprovalDofe.create,
          data: values,
          invalidateTag: apiTags.getAllPreApprovalDofe,
        });

        if ("error" in response && response.error) {
          handleErrors(response as ApiResponse, (errors) => {
            if (errors.general) {
              showErrorMessage(errors.general);
            } else {
              Object.entries(errors).forEach(([field, msg]) => {
                showErrorMessage(`${field}: ${msg}`);
              });
            }
          });
          return;
        }
        if (response?.data?.status === "success") {
          showSuccessMessage(response.data.message);
          formik.resetForm();
          navigate(PATH.dashboard.preApprovalDofe);
        }
      } catch {
        showErrorMessage("Error While Adding Pre Approval Dofe");
      }
    },
  });

  return {
    formik,
    isError,
    isLoading,
    isSuccess,
  };
};

export default useCreatePreApprovalDofe;
