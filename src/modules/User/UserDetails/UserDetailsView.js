import React from 'react';
import { useParams } from 'react-router-dom';
import { Spin, Alert, Button } from 'antd';
import { useUserDetails } from '../../../services/useGetUser';

const UserDetailsView = ({ onBackClick }) => {
  const { id } = useParams();

  const { data: user, isLoading, isError, error } = useUserDetails(id);

  if (isLoading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <Spin size="large" />
      </div>
    );
  }

  if (isLoading)
    return (
      <div className="flex justify-center items-center h-screen">
        <Spin size="large" />
      </div>
    );

  if (isError)
    return (
      <div className="max-w-2xl mx-auto mt-8">
        <Alert
          message="Error"
          description={error.message || 'Failed to load user'}
          type="error"
          showIcon
        />
        <Button className="mt-4" onClick={onBackClick}>
          Back to Users
        </Button>
      </div>
    );

  return (
    <div className="max-w-3xl mx-auto mt-8 p-6 bg-white shadow rounded">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">User Details</h1>
        <Button onClick={onBackClick}>Back to Users</Button>
      </div>

      <div className="mb-4">
        <strong>ID:</strong> {user.id}
      </div>
      <div className="mb-4">
        <strong>Name:</strong> {user.name}
      </div>
      <div className="mb-4">
        <strong>Email:</strong> {user.email}
      </div>
      <div className="mb-4">
        <strong>Role:</strong> {user.role}
      </div>
      <div className="mb-4">
        <strong>Avatar:</strong>
        <div className="mt-2">
          <img
            src={user.avatar}
            alt={user.name}
            className="w-32 h-32 object-cover rounded"
          />
        </div>
      </div>

      {user.addresses && user.addresses.length > 0 && (
        <div className="mb-4">
          <strong>Addresses:</strong>
          <div className="mt-2 space-y-2">
            {user.addresses.map((address, index) => (
              <div key={index} className="border p-3 rounded">
                <div>
                  <strong>Street:</strong> {address.street}
                </div>
                <div>
                  <strong>City:</strong> {address.city}
                </div>
                <div>
                  <strong>State:</strong> {address.state}
                </div>
                <div>
                  <strong>ZIP:</strong> {address.zip}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default UserDetailsView;
