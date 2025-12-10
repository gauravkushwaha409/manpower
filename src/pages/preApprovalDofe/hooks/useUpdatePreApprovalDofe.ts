import { useGetDataQuery, useUpdateDataMutation } from "@/api/api";
import { useFormik } from "formik";
import {
  preApprovalDofeValidationSchema,
  PreApprovalDofeValidationSchemaType,
} from "../schema/preApprovalDofeValidationSchema";
import { endpoints } from "@/api/endpoints";
import { apiTags } from "@/constant/tag";
import handleErrors, { ApiResponse } from "@/api/api.error";
import { showErrorMessage, showSuccessMessage } from "@/utils/toast";
import { IOption } from "@/types";
import { PATH } from "@/constant/path";
import { useNavigate } from "react-router-dom";
import { useGetPreApprovalDofeDetails } from "./useGetPreApprovalDofeDetails";
import { PreApprovalDofeListItemResponse } from "../interface/IPreApprovalDofe";

interface IUpdateProps{
  updateId: string;
}

const useUpdatePreApprovalDofe = ({ updateId }: IUpdateProps) => {
  const navigate = useNavigate();

  const [updatePreApprovalDofe, { isError, isLoading, isSuccess }] =
    useUpdateDataMutation();

  const { data: company } = useGetDataQuery<{
    data: PreApprovalDofeListItemResponse;
  }>({
    url: endpoints.changePassword,
    params: { p: 1, page_size: 100 },
  });

  const companyOptions: IOption[] =
    company?.data?.records?.map((i) => ({
      label: i.company,
      value: i.id,
    })) || [];
  const { data, refetchPreApprovalDofeDetails } = useGetPreApprovalDofeDetails({
    id: updateId,
  });

  const initialValues: PreApprovalDofeValidationSchemaType = {
    company: data?.data?.company?.recruitment_company || "",
    preApprovalDate: data?.data?.preApprovalDate || "",
    ltNumber: data?.data?.ltNumber || "",
    chalanNumber: data?.data?.chalanNumber || "",
  };

  const formik = useFormik({
    initialValues,
    validationSchema: preApprovalDofeValidationSchema,
    enableReinitialize: true,
    onSubmit: async (values) => {
      try {
        const response = await updatePreApprovalDofe({
          data: values,
          url: endpoints?.preApprovalDofe?.update.replace("id", updateId),
          invalidateTag: apiTags?.getAllPreApprovalDofe,
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
          refetchPreApprovalDofeDetails();
          navigate(PATH.dashboard.preApprovalDofe);
        }
      } catch {
        showErrorMessage("Error While Updating Pre Approval Dofe");
      }
    },
  });

  return {
    data,
    formik,
    isLoading,
    isError,
    isSuccess,
    companyOptions,
  };
};

export default useUpdatePreApprovalDofe;
