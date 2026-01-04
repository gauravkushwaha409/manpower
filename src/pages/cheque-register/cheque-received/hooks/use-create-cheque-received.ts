import { useFormik } from "formik";

const useCreateChequeReceived = () => {
  const formik = useFormik({
    initialValues: {},
    onSubmit: () => {},
  });
  return { formik };
};

export default useCreateChequeReceived;
