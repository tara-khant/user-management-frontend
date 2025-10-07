import { Alert } from 'antd';
import React from 'react';
import { useForm } from 'react-hook-form';

const LoginView = ({ onLoginClick, setErrorMessage, errorMessage }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  return (
    <div className="min-h-screen flex">
      {/* Left side illustration for desktop */}
      <div className="hidden md:flex w-1/2 bg-gradient-to-tr from-blue-400 to-indigo-500 items-center justify-center">
        {/* <img
          src="/login-illustration.png" // Replace with your illustration
          alt="Login Illustration"
          className="w-3/4"
        /> */}
      </div>

      {errorMessage && (
        <div
          style={{
            position: 'fixed',
            top: '20px',
            right: '20px',
            zIndex: 9999,
            width: '500px',
          }}
        >
          <Alert
            message="Login Failed"
            description={errorMessage}
            type="error"
            showIcon
            closable
            onClose={() => setErrorMessage('')}
          />
        </div>
      )}

      {/* Right side form */}
      <div className="flex w-full md:w-1/2 items-center justify-center p-8 bg-gray-50">
        <form
          onSubmit={handleSubmit(onLoginClick)}
          className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md space-y-6"
          autoComplete="off"
        >
          <h2 className="text-3xl font-bold text-gray-800 text-center">
            Login
          </h2>
          <div>
            <label className="block text-gray-700 mb-1">Email</label>
            <input
              type="email"
              {...register('email', { required: 'Email is required' })}
              className="w-full h-[40px] border border-gray-300 px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your email"
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">
                {errors.email.message}
              </p>
            )}
          </div>

          <div>
            <label className="block text-gray-700 mb-1">Password</label>
            <input
              type="password"
              {...register('password', { required: 'Password is required' })}
              className="w-full border h-[40px] border-gray-300 px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your password"
              autoComplete="new-password"
            />
            {errors.password && (
              <p className="text-red-500 text-sm mt-1">
                {errors.password.message}
              </p>
            )}
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginView;
