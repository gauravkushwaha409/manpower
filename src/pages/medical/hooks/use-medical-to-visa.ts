import { useUpdateDataMutation } from "@/api/api";
import { useFormik } from "formik";

const useMedicalToVisa = () => {
  const [medicalToVisa, { isLoading }] = useUpdateDataMutation();
  const initialValues = {};
  const formik = useFormik({
    initialValues,
    onSubmit: () => {},
  });
  return { formik, isLoading };
};

export default useMedicalToVisa;
