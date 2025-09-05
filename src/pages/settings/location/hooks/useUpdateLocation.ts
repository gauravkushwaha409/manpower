import { useGetDataQuery, useUpdateDataMutation } from "@/api/api";
import { useFormik } from "formik";
import {
  locationValidationSchema,
  LocationValidationSchemaType,
} from "../schema/locationValidationSchema";

const useUpdateLocation = () => {
  const [
    updateLocation,
    {
      isError: isUpdateLocationSuccess,
      isLoading: isUpdateLocationLoading,
      isSuccess: isUpdateLocationError,
    },
  ] = useUpdateDataMutation();

  const {
    data,
    isError: isGetLocationDetailsError,
    isLoading: isGetLocationDetailsLoading,
    isSuccess: isGetLocationDetailsSuccess,
  } = useGetDataQuery({
    url: "/country",
    params: {},
    tag: "",
  });

  const initial: LocationValidationSchemaType = data;

  const initialValues: LocationValidationSchemaType = {
    id: initial?.id || "",
    locationImage: initial?.locationImage || "",
    locationName: initial?.locationName || "",
  };

  const formik = useFormik({
    initialValues,
    validationSchema: locationValidationSchema,
    enableReinitialize: true,
    onSubmit: async (values) => {
      updateLocation({
        data: values,
        url: `/location/${values?.id}`,
        invalidateTag: "",
      });
    },
  });

  return {
    data,
    formik,
    updateLocation,
    isGetLocationDetailsError,
    isGetLocationDetailsLoading,
    isGetLocationDetailsSuccess,
    isUpdateLocationSuccess,
    isUpdateLocationLoading,
    isUpdateLocationError,
  };
};

export default useUpdateLocation;
