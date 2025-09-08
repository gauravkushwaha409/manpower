import * as Yup from "yup";

export const locationValidationSchema = Yup.object().shape({
  id: Yup.string().required("Location id is required"),

  locationName: Yup.string().required("Location name is required"),

  locationImage: Yup.string().required("Location image is required"),
});

export type LocationValidationSchemaType = Yup.InferType<
  typeof locationValidationSchema
>;
