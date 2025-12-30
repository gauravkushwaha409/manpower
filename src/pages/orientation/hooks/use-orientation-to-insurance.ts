import { useUpdateDataMutation } from "@/api/api";
import { useFormik } from "formik";

const useOrientationToInsurance = () => {
  const [visaToOrientation, { isLoading }] = useUpdateDataMutation();

  const initialValues = {};
  const formik = useFormik({
    initialValues,
    onSubmit: () => {},
  });
  return { formik, isLoading };
};

export default useOrientationToInsurance;
