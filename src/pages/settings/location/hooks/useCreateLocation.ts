import { useFormik } from "formik";
import { usePostDataMutation } from "@/api/api";
import {
  locationValidationSchema,
  LocationValidationSchemaType,
} from "../schema/locationValidationSchema";

const useCreateLocation = () => {
  const [
    createLocation,
    {
      isError: isLocationError,
      isLoading: isLocationLoading,
      isSuccess: isLocationSuccess,
    },
  ] = usePostDataMutation();

  const initialValues: LocationValidationSchemaType = {
    id: "",
    locationImage: "",
    locationName: "",
  };

  const formik = useFormik<LocationValidationSchemaType>({
    initialValues,
    validationSchema: locationValidationSchema,
    onSubmit: async (values) => {
      await createLocation({
        url: "/location",
        data: values,
        invalidateTag: "",
      });
    },
  });

  return {
    formik,
    isLocationError,
    isLocationLoading,
    isLocationSuccess,
  };
};

export default useCreateLocation;
