import * as Yup from "yup";

const ticketSchema = Yup.object().shape({
  candidate_name: Yup.string().required("This field is required"),
  airline_name: Yup.string().required("This field is required"),
  flight_no: Yup.string().required("This field is required"),
  departure_date: Yup.string().required("This field is required"),
  ticket_file: Yup.mixed<string | File>()
    .required("This field is required")
    .test("file-or-url", "Invalid icon", (value) => {
      if (typeof value === "string") {
        try {
          new URL(value);
          return true;
        } catch {
          return false;
        }
      }
      if (value instanceof File) return true;
      return false;
    }),
});

export type ticketSchemaType = Yup.InferType<typeof ticketSchema>;
export const ticketValidationSchema = ticketSchema;
