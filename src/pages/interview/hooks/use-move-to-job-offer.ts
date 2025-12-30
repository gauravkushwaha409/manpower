import { useUpdateDataMutation } from "@/api/api";
import { useFormik } from "formik";

const useMoveToJobOffer = () => {
  const [moveToJobOffer, { isLoading }] = useUpdateDataMutation();

  const initialValues = {};
  const formik = useFormik({
    initialValues,
    onSubmit: () => {},
  });

  return { formik, isLoading };
};
export default useMoveToJobOffer;
