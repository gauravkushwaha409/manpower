import { useGetDataQuery, useUpdateDataMutation } from "@/api/api";
import { useFormik } from "formik";
import {
  orientationValidationSchema,
  OrientationValidationSchemaType,
} from "../schema/orientationValidationSchema";

const useUpdateOrientation = () => {
  const [
    updateOrientation,
    {
      isError: isUpdateOrientationError,
      isLoading: isUpdateOrientationLoading,
      isSuccess: isUpdateOrientationSuccess,
    },
  ] = useUpdateDataMutation();

  const {
    data,
    isError: isGetOrientationError,
    isLoading: isGetOrientationLoading,
    isSuccess: isGetOrientationSuccess,
  } = useGetDataQuery({
    url: "/orientation",
    params: {},
    tag: "",
  });

  const initial: OrientationValidationSchemaType = data;

  const initialValues: OrientationValidationSchemaType = {
    id: initial?.id || "",
    candidate_name: initial?.candidate_name || "",
    certificate_no: initial?.certificate_no || "",
    orientation_center_name: initial?.orientation_center_name || "",
    start_date: initial?.start_date || "",
    end_date: initial?.end_date || "",
  };

  const formik = useFormik({
    initialValues,
    validationSchema: orientationValidationSchema,
    enableReinitialize: true,
    onSubmit: async (values) => {
      updateOrientation({
        data: values,
        url: `/orientation/${values?.id}`,
        invalidateTag: "",
      });
    },
  });

  return {
    data,
    formik,
    isGetOrientationError,
    isGetOrientationLoading,
    isGetOrientationSuccess,
    isUpdateOrientationSuccess,
    isUpdateOrientationLoading,
    isUpdateOrientationError,
  };
};

export default useUpdateOrientation;
