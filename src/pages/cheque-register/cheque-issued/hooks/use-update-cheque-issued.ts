import { useFormik } from "formik";

const useUpdateChequeIssued = () => {
  const formik = useFormik({
    initialValues: {},
    onSubmit: () => {},
  });

  return { formik };
};

export default useUpdateChequeIssued;
