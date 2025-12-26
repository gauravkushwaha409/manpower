import { useUpdateDataMutation } from "@/api/api";
import { useUpdateModal } from "@/hooks/update-modal";
import useDocumentDetails from "./use-document-details";
import {
  DocumentSchemaType,
  DocumentValidationSchema,
} from "../schema/document-schema";
import { useFormik } from "formik";
import { endpoints } from "@/api/endpoints";
import { apiTags } from "@/constant/tag";
import { ApiResponse } from "@/api/api.error";
import { handleResponse } from "@/utils/handleResponse";

const useUpdateDocument = () => {
  const { updateId, handleCloseModal } = useUpdateModal();
  const [updateDocument, { isLoading }] = useUpdateDataMutation();
  const { documentDetails, isLoading: isInitialLoading } = useDocumentDetails({
    id: updateId,
  });

  const initialValues: DocumentSchemaType = {
    country: documentDetails?.data?.country || "",
    document: documentDetails?.data?.document || "",
  };

  const formik = useFormik<DocumentSchemaType>({
    initialValues,
    validationSchema: DocumentValidationSchema,
    onSubmit: async (values, { setErrors, resetForm }) => {
      const response = (await updateDocument({
        data: values,
        url: endpoints.document.update.replace(":id", updateId),
        invalidateTag: [apiTags.document.list, apiTags.document.details],
      })) as ApiResponse;
      handleResponse({
        response,
        setErrorCallBack: setErrors,
        handleCloseModal,
        resetForm: resetForm,
      });
    },
  });
  return { formik, isLoading, isInitialLoading };
};
export default useUpdateDocument;
