import * as Yup from "yup";

const ticketSchema = Yup.object().shape({
  candidate_name: Yup.string().required("This field is required"),
  airline_name: Yup.string().required("This field is required"),
  flight_no: Yup.string().required("This field is required"),
  departure_date: Yup.string().required("This field is required"),
  ticket_file: Yup.string().required("This field is required"),
});

export type ticketSchemaType = Yup.InferType<typeof ticketSchema>;
export const ticketValidationSchema = ticketSchema;
