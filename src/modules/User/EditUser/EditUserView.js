import { Alert, Button } from 'antd';
import React, { startTransition } from 'react';
import { useFieldArray } from 'react-hook-form';
import Address from './Address';
import PasswordInput from '../../../components/PasswordInput';
import { useNavigate } from 'react-router-dom';

const EditUserView = ({
  formData,
  onEditUser,
  errorMessage,
  setErrorMessage,
}) => {
  const navigate = useNavigate();
  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
  } = formData;

  const { fields, append, remove } = useFieldArray({
    control,
    name: 'addresses',
  });

  return (
    <div className="max-w-2xl mx-auto mt-8 p-6 bg-white shadow rounded">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold mb-6">Edit User</h1>
        <Button
          type="default"
          onClick={() => startTransition(() => navigate(-1))}
          className="mb-4"
        >
          Back
        </Button>
      </div>
      <form onSubmit={handleSubmit(onEditUser)}>
        <div className="mb-4">
          <label className="block font-medium mb-1">Full Name</label>
          <input
            type="text"
            placeholder="Enter full name"
            {...register('name', { required: 'Name is required' })}
            className="w-full border border-gray-300 rounded px-3 py-2"
          />
          {errors.name && (
            <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
          )}
        </div>

        <div className="mb-4">
          <label className="block font-medium mb-1">Role</label>
          <select
            {...register('role', { required: 'Role is required' })}
            className="w-full border border-gray-300 rounded px-3 py-2"
          >
            <option value="customer">Customer</option>
            <option value="admin">Admin</option>
          </select>
          {errors.role && (
            <p className="text-red-500 text-sm mt-1">{errors.role.message}</p>
          )}
        </div>

        <div className="mb-4">
          <label className="block font-medium mb-1">Email</label>
          <input
            type="email"
            placeholder="Enter email"
            {...register('email', { required: 'Email is required' })}
            className="w-full border border-gray-300 rounded px-3 py-2"
          />
          {errors.email && (
            <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
          )}
        </div>

        <PasswordInput register={register} errors={errors} />

        <div className="mb-4">
          <label className="block font-medium mb-1">Avatar URL</label>
          <input
            type="text"
            placeholder="Enter avatar URL"
            {...register('avatar', {
              required: 'Avatar is required',
              pattern: {
                value: /(https?:\/\/.*\.(?:png|jpg|jpeg|gif|webp|svg))/i,
                message:
                  'Enter a valid image URL (png, jpg, jpeg, gif, webp, svg)',
              },
            })}
            className="w-full border border-gray-300 rounded px-3 py-2"
          />
          {errors.avatar && (
            <p className="text-red-500 text-sm mt-1">{errors.avatar.message}</p>
          )}
        </div>

        <div className="mb-4">
          <label className="block font-medium mb-2">Addresses</label>
          <Address
            fields={fields}
            register={register}
            errors={errors}
            remove={remove}
          />
          <button
            type="button"
            onClick={() => append({ street: '', city: '', state: '', zip: '' })}
            className="px-3 py-1 bg-blue-500 text-white rounded"
          >
            Add Address
          </button>
        </div>

        <button
          type="submit"
          className="mt-4 px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
        >
          Edit User
        </button>
      </form>
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
            message="Create User Failed"
            description={errorMessage}
            type="error"
            showIcon
            closable
            onClose={() => setErrorMessage('')}
          />
        </div>
      )}
    </div>
  );
};

export default EditUserView;
