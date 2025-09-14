import ExtendedForm from '@/components/extended-components/ExtendedForm';
import { Link } from 'react-router-dom';
import useLogin from './hooks/useLogin';
import LoginForm from './partials/LoginForm';
import bgimg from '@/assets/image.png';

const Login = () => {
  const { formik } = useLogin();
  return (
    <div
      className="relative flex justify-center items-center bg-cover bg-center p-6 px-4 w-full h-full min-h-screen"
      style={{ backgroundImage: `url(${bgimg})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-50 pointer-events-none" />
      <div className="relative bg-opacity-90 p-8 rounded w-full max-w-2xl">
        <ExtendedForm formik={formik} submitText="Login">
          <div className="mb-6">
            <LoginForm />
          </div>
        </ExtendedForm>
        <div className="mt-6 text-white text-center">
          Forgot Your Password?{' '}
          <Link
            to="/reset-password"
            className="font-semibold text-primary-800 hover:text-primary-900"
          >
            Reset Password
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
