import { useFormik } from "formik";
import { usePostDataMutation } from "@/api/api";
import {
  ticketValidationSchema,
  TicketValidationSchemaType,
} from "../schema/ticketValidationSchema";

const useCreateTicket = () => {
  const [
    createTicket,
    {
      isError: isTicketError,
      isLoading: isTicketLoading,
      isSuccess: isTicketSuccess,
    },
  ] = usePostDataMutation();

  const initialValues: TicketValidationSchemaType = {
    id: "",
    candidate_name: "",
    country: "",
    flight_number: "",
    airline_name: "",
    arrival_airport: "",
    departure_airport: "",
    departure_date: new Date(),
    ticket_no: "",
    status: "Pending",
  };

  const formik = useFormik<TicketValidationSchemaType>({
    initialValues,
    validationSchema: ticketValidationSchema,
    onSubmit: async (values) => {
      await createTicket({
        url: "/ticket",
        data: values,
        invalidateTag: "",
      });
    },
  });

  return {
    formik,
    isTicketLoading,
    isTicketError,
    isTicketSuccess,
  };
};

export default useCreateTicket;
