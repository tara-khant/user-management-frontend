import React, { useState } from 'react';
import { useLogin } from '../../../services/useLogin';
import LoginView from './LoginView';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [errorMessage, setErrorMessage] = useState('');
  const { mutate } = useLogin();
  const navigate = useNavigate();

  const handleLogin = (data) => {
    mutate(data, {
      onSuccess: (res) => {
        localStorage.setItem('token', data?.access_token);
        navigate('/users');
      },
      onError: (error) => {
        if (error?.status === 401) {
          setErrorMessage('Unauthorized: Invalid email or password');
        } else {
          setErrorMessage('Login failed. Please try again later.');
        }
      },
    });
  };

  return (
    <LoginView
      onLoginClick={handleLogin}
      setErrorMessage={setErrorMessage}
      errorMessage={errorMessage}
    />
  );
};

export default Login;
