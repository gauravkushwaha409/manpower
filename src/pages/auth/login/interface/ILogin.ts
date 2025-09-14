// success response
export interface ILoginSuccess {
  data: {
    user: IUser;
    refreshToken: string;
    accessToken: string;
  };
  message: string;
  status: string;
}

interface IUser {
  id: string;
  name: string;
  email: string;
  phone_No: string;
  avatar: string | null;
}

// Error Response
export interface ILoginError {
  data: {
    message: string;
    success: boolean;
  };
}
