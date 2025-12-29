import { usePostDataMutation } from "@/api/api";
import { useAddModal } from "@/hooks/add-modal";
import { useFormik } from "formik";
import { endpoints } from "@/api/endpoints";
import { apiTags } from "@/constant/tag";
import { ApiResponse } from "@/api/api.error";
import { handleResponse } from "@/utils/handleResponse";
import {
  ticketSchemaType,
  ticketValidationSchema,
} from "../schema/ticket-schema";

const useCreateTicket = () => {
  const [createTicket, { isLoading }] = usePostDataMutation();
  const { handleCloseModal } = useAddModal();
  const initialValues: ticketSchemaType = {
    candidate_name: "",
    airline_name: "",
    departure_date: "",
    flight_no: "",
    ticket_file: "",
  };

  const formik = useFormik<ticketSchemaType>({
    initialValues,
    validationSchema: ticketValidationSchema,
    onSubmit: async (values, { setErrors, resetForm }) => {
      const response = (await createTicket({
        url: endpoints.ticket.create,
        data: values,
        invalidateTag: [apiTags.ticket.list],
      })) as ApiResponse;
      handleResponse({
        response,
        setErrorCallBack: setErrors,
        handleCloseModal: handleCloseModal,
        resetForm: resetForm,
      });
    },
  });

  return {
    formik,
    isLoading,
  };
};

export default useCreateTicket;
