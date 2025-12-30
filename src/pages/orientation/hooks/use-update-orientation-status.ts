import { useUpdateDataMutation } from "@/api/api";
import { useFormik } from "formik";
import useUpdateOrientationStatusModal from "./use-update-orientation-status-modal";

const useUpdateOrientationStatus = () => {
  const [, { isLoading }] = useUpdateDataMutation();
  const { status } = useUpdateOrientationStatusModal();
  const initialValues = {
    orientation_status: status,
  };
  const formik = useFormik({
    initialValues,
    enableReinitialize: true,
    onSubmit: () => {},
  });
  return { formik, isLoading };
};
export default useUpdateOrientationStatus;
