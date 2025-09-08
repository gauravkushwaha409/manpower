import { useGetDataQuery, useUpdateDataMutation } from "@/api/api";
import {
  userValidationSchema,
  UserValidationSchemaType,
} from "../schema/userValidationSchema";
import { useFormik } from "formik";

const useUpdateUser = () => {
  const [
    updateUser,
    {
      isLoading: isUpdateUserLoading,
      isError: isUpdateUserError,
      isSuccess: isUpdateUserSuccess,
    },
  ] = useUpdateDataMutation();
  const {
    data,
    isError: isGetUserDetailsError,
    isLoading: isGetUserDetailsLoading,
    isSuccess: isGetUserDetailsSuccess,
  } = useGetDataQuery({ url: "/users", params: {}, tag: "" });

  const initial: UserValidationSchemaType = data;

  const initialValues: UserValidationSchemaType = {
    id: initial?.id || "",
    name: initial?.name || "",
    email: initial?.email || "",
    phone_No: initial?.phone_No || "",
  };

  const formik = useFormik({
    initialValues,
    validationSchema: userValidationSchema,
    enableReinitialize: true,
    onSubmit: async (values) => {
      updateUser({
        data: values,
        url: `/users/${values?.id}`,
        invalidateTag: "",
      });
    },
  });

  return {
    formik,
    data,
    isUpdateUserSuccess,
    isUpdateUserError,
    isUpdateUserLoading,
    isGetUserDetailsSuccess,
    isGetUserDetailsLoading,
    isGetUserDetailsError,
  };
};

export default useUpdateUser;
