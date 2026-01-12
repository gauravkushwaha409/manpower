import { useUpdateDataMutation } from "@/api/api";
import { useFormik } from "formik";
import { apiTags } from "@/constant/tag";
import { endpoints } from "@/api/endpoints";
import { useUpdateModal } from "@/hooks/use-update-modal";
import { ApiResponse } from "@/api/api.error";
import { handleResponse } from "@/utils/handleResponse";
import useTicketDetails from "./use-ticket-details";
import {
  ticketSchemaType,
  ticketValidationSchema,
} from "../schema/ticket-schema";

const useUpdateTicket = () => {
  const [updateTicket, { isLoading }] = useUpdateDataMutation();
  const { handleCloseModal, updateId } = useUpdateModal();
  const { ticketDetails, isLoading: isInitialLoading } = useTicketDetails({
    id: updateId,
  });

  const initialValues: ticketSchemaType = {
    candidate_name: ticketDetails?.data?.candidate_name || "",
    airline_name: ticketDetails?.data?.airline_name || "",
    departure_date: ticketDetails?.data?.depature_date || "",
    flight_no: ticketDetails?.data?.flight_no || "",
    ticket_file: ticketDetails?.data?.ticket_file || "",
  };

  const formik = useFormik<ticketSchemaType>({
    initialValues,
    validationSchema: ticketValidationSchema,
    enableReinitialize: true,
    validateOnMount: true,

    onSubmit: async (values, { setErrors, resetForm }) => {
      const response = (await updateTicket({
        data: values,
        url: endpoints.ticket.update.replace(":id", updateId ?? ""),
        invalidateTag: [apiTags.ticket.details, apiTags.ticket.list],
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

  return {
    formik,
    isLoading,
    isInitialLoading,
  };
};

export default useUpdateTicket;
