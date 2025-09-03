import * as Yup from "yup";

export const ticketValidationSchema = Yup.object().shape({
  id: Yup.string().required("Candidate Id is required"),
  candidate_name: Yup.string()
    .required("Candidate Name is required")
    .min(3, "Candidate Name must be at least 3 characters"),
  flight_number: Yup.string().required("Flight Number is required"),
  airline_name: Yup.string().required("Airline Name is required"),
  arrival_airport: Yup.string().required("Arrival Airport is required"),
  departure_airport: Yup.string().required("Departure Airport is required"),
  departure_date: Yup.date().required("Departure Date is required"),
  ticket_no: Yup.string().required("Ticket no is required"),
  country: Yup.string().required("Country is required"),
  status: Yup.string().required("Status is required"),
});

export type TicketValidationSchemaType = Yup.InferType<
  typeof ticketValidationSchema
>;
