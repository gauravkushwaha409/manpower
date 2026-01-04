import { useFormik } from "formik";

const useUpdateChequeReceived = () => {
  const formik = useFormik({
    initialValues: {},
    onSubmit: () => {},
  });

  return { formik };
};

export default useUpdateChequeReceived;
