import React, { useState } from 'react';
import { EyeInvisibleOutlined, EyeOutlined } from '@ant-design/icons';

const PasswordInput = ({ register, errors }) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="mb-4">
      <label className="block font-medium mb-1">Password</label>
      <div className="relative">
        <input
          type={showPassword ? 'text' : 'password'}
          placeholder="Enter password"
          autoComplete="new-password"
          {...register('password', {
            required: 'Password is required',
            minLength: {
              value: 4,
              message: 'Password length must be at least 4',
            },
          })}
          className={`w-full h-[40px] border border-gray-300 rounded px-3 pr-10 ${
            errors.password ? 'border-red-500' : ''
          }`}
        />
        <span
          className="absolute top-1/2 right-3 -translate-y-1/2 cursor-pointer text-gray-500"
          onClick={() => setShowPassword(!showPassword)}
        >
          {showPassword ? <EyeOutlined /> : <EyeInvisibleOutlined />}
        </span>
      </div>
      {errors.password && (
        <p className="text-red-500 text-sm mt-1">{errors.password.message}</p>
      )}
    </div>
  );
};

export default PasswordInput;
