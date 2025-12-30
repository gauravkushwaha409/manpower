import { useUpdateDataMutation } from "@/api/api";
import { useFormik } from "formik";

const useJobOfferToMedical = () => {
  const [moveJobOfferToMedical, { isLoading }] = useUpdateDataMutation();
  const initialValues = {};
  const formik = useFormik({
    initialValues,
    onSubmit: () => {},
  });

  return { formik, isLoading };
};

export default useJobOfferToMedical;
