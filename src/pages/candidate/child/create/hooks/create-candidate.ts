import { useFormik } from "formik";
import { useState } from "react";

export const useCreateCandidate = () => {
  const [step, setStep] = useState<number>(0);
  const initialValues = {};
  const formik = useFormik({
    initialValues,
    onSubmit: () => {},
  });

  return { formik, step, setStep };
};
