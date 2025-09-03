import { useFormik } from "formik";
import { usePostDataMutation } from "@/api/api";
import {
  orientationValidationSchema,
  OrientationValidationSchemaType,
} from "../schema/orientationValidationSchema";

const useCreateOrientation = () => {
  const [
    createOrientation,
    {
      isError: isOrientationError,
      isLoading: isOrientationLoading,
      isSuccess: isOrientationSuccess,
    },
  ] = usePostDataMutation();

  const initialValues: OrientationValidationSchemaType = {
    id: "",
    candidate_name: "",
    certificate_no: "",
    orientation_center_name: "",
    start_date: new Date(),
    end_date: new Date(),
  };

  const formik = useFormik<OrientationValidationSchemaType>({
    initialValues,
    validationSchema: orientationValidationSchema,
    onSubmit: async (values) => {
      await createOrientation({
        url: "/orientation",
        data: values,
        invalidateTag: "",
      });
    },
  });

  return {
    formik,
    isOrientationLoading,
    isOrientationError,
    isOrientationSuccess,
  };
};

export default useCreateOrientation;
