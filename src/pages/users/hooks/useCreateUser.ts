import { useFormik } from "formik";
import { usePostDataMutation } from "@/api/api";
import {
  userValidationSchema,
  UserValidationSchemaType,
} from "../schema/userValidationSchema";

const useCreateUser = () => {
  const [
    createUser,
    {
      isError: isCreateUserError,
      isLoading: isCreateUserLoading,
      isSuccess: isCreateUserSuccess,
    },
  ] = usePostDataMutation();

  const initialValues: UserValidationSchemaType = {
    id: "",
    name: "",
    email: "",
    phone_No: "",
  };

  const formik = useFormik<UserValidationSchemaType>({
    initialValues,
    validationSchema: userValidationSchema,
    onSubmit: async (values) => {
      await createUser({
        url: "/users",
        data: values,
        invalidateTag: "",
      });
    },
  });

  return {
    formik,
    isCreateUserError,
    isCreateUserLoading,
    isCreateUserSuccess,
  };
};

export default useCreateUser;
