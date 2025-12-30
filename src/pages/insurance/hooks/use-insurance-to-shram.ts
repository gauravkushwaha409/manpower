import { useUpdateDataMutation } from "@/api/api";
import { useFormik } from "formik";

const useInsuranceToShram = () => {
  const [insuranceToShram, { isLoading }] = useUpdateDataMutation();

  const initialValues = {};

  const formik = useFormik({
    initialValues,
    onSubmit: () => {},
  });

  return { formik, isLoading };
};

export default useInsuranceToShram;
