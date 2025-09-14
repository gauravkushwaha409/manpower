import { useFormik } from 'formik';

import { usePostDataMutation } from '@/api/api';
import {
  ChangePasswordFormValues,
  changeValidationSchema,
} from '../schema/newPasswordValidation';
import { endpoints } from '@/api/endpoints';
import { showErrorMessage, showSuccessMessage } from '@/utils/toast';
import handleErrors, { ApiResponse } from '@/api/api.error';
import { useNavigate } from 'react-router-dom';
import { PATH } from '@/constant/path';
import { clearAllCookies } from '@/utils/cookie';

const useCreateNewPassword = () => {
  const [createNewPasswordForm, { isError, isLoading, isSuccess }] =
    usePostDataMutation();
  const navigate = useNavigate();
  const initialValues: ChangePasswordFormValues = {
    currentPassword: '',
    newPassword: '',
    confirmPassword: '',
  };
  const formik = useFormik<ChangePasswordFormValues>({
    initialValues,
    validationSchema: changeValidationSchema,
    onSubmit: async (values) => {
      const response = await createNewPasswordForm({
        url: endpoints.changePassword,
        data: values,
      });

      if ('error' in response && response.error) {
        handleErrors(response as ApiResponse, (errors) => {
          if (errors.general) {
            showErrorMessage(errors.general);
          } else {
            Object.entries(errors).forEach(([field, msg]) => {
              showErrorMessage(`${field}: ${msg}`);
            });
          }
        });
        return;
      }

      if (response?.data?.status === 'success') {
        showSuccessMessage(response?.data?.message);
        clearAllCookies();
        navigate(PATH.auth.login);
      }
    },
  });
  return { formik, isError, isLoading, isSuccess };
};

export default useCreateNewPassword;
