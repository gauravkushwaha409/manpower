import { usePostDataMutation } from "@/api/api";
import { useAddModal } from "@/hooks/use-add-modal";
import {
  DocumentSchemaType,
  DocumentValidationSchema,
} from "../schema/document-schema";
import { useFormik } from "formik";
import { endpoints } from "@/api/endpoints";
import { apiTags } from "@/constant/tag";
import { ApiResponse } from "@/api/api.error";
import { handleResponse } from "@/utils/handleResponse";

const useCreateDocument = () => {
  const [createDocument, { isLoading }] = usePostDataMutation();
  const { handleCloseModal } = useAddModal();
  const initialValues: DocumentSchemaType = {
    country: "",
    document: "",
  };

  const formik = useFormik<DocumentSchemaType>({
    initialValues,
    validationSchema: DocumentValidationSchema,
    onSubmit: async (values, { setErrors, resetForm }) => {
      const response = (await createDocument({
        url: endpoints.document.create,
        data: values,
        invalidateTag: [apiTags.document.list],
      })) as ApiResponse;
      handleResponse({
        response,
        setErrorCallBack: setErrors,
        handleOnSuccess: () => {
          resetForm();
          handleCloseModal();
        }
      });
    },
  });

  return { formik, isLoading };
};
export default useCreateDocument;
