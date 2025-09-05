import * as Yup from "yup";

export const seoValidationSchema = Yup.object().shape({
  id: Yup.string().required("Policy id is required"),

  seo_type: Yup.string().required("SEO Type is required"),

  meta_title: Yup.string().required("Meta Title is required"),

  meta_description: Yup.string().required("Meta Description is required"),

  og_title: Yup.string().required("OG Title is required"),

  og_description: Yup.string().required("OG Description is required"),
});

export type SeoValidationSchemaType = Yup.InferType<typeof seoValidationSchema>;
