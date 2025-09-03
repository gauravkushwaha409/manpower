import { useGetDataQuery, useUpdateDataMutation } from "@/api/api";
import { useFormik } from "formik";
import {
  ticketValidationSchema,
  TicketValidationSchemaType,
} from "../schema/ticketValidationSchema";

const useUpdateTicket = () => {
  const [
    updateTicket,
    {
      isError: isUpdateTicketError,
      isLoading: isUpdateTicketLoading,
      isSuccess: isUpdateTicketSuccess,
    },
  ] = useUpdateDataMutation();

  const {
    data,
    isError: isGetTicketError,
    isLoading: isGetTicketLoading,
    isSuccess: isGetTicketSuccess,
  } = useGetDataQuery({
    url: "/ticket",
    params: {},
    tag: "",
  });

  const initial: TicketValidationSchemaType = data;

  const initialValues: TicketValidationSchemaType = {
    id: initial?.id || "",
    candidate_name: initial?.candidate_name || "",
    flight_number: initial?.flight_number || "",
    airline_name: initial?.airline_name || "",
    ticket_no: initial?.ticket_no || "",
    departure_airport: initial?.departure_airport || "",
    arrival_airport: initial?.arrival_airport || "",
    departure_date: initial?.departure_date || "",
    status: initial?.status || "Pending",
    country: initial?.country || "",
  };

  const formik = useFormik({
    initialValues,
    validationSchema: ticketValidationSchema,
    enableReinitialize: true,
    onSubmit: async (values) => {
      updateTicket({
        data: values,
        url: `/ticket/${values?.id}`,
        invalidateTag: "",
      });
    },
  });

  return {
    data,
    formik,
    isGetTicketError,
    isGetTicketLoading,
    isGetTicketSuccess,
    isUpdateTicketSuccess,
    isUpdateTicketLoading,
    isUpdateTicketError,
  };
};

export default useUpdateTicket;
