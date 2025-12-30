import { useUpdateDataMutation } from "@/api/api";
import { useFormik } from "formik";

const useShramToTicket = () => {
  const [shramToTicket, { isLoading }] = useUpdateDataMutation();

  const initialValues = {};

  const formik = useFormik({
    initialValues,
    onSubmit: () => {},
  });

  return { formik, isLoading };
};

export default useShramToTicket;
