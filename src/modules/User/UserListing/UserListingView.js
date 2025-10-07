import React from 'react';
import { Table, Spin, Alert } from 'antd';
import { useUsers } from '../../../services/useUsers';

const UserListingView = () => {
  const { data, isLoading, isError, error } = useUsers();

  const columns = [
    {
      title: 'ID',
      dataIndex: 'id',
      key: 'id',
      width: 70,
    },
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Email',
      dataIndex: 'email',
      key: 'email',
    },
    {
      title: 'Role',
      dataIndex: 'role',
      key: 'role',
      render: (role) => <span className="capitalize">{role}</span>,
    },
    {
      title: 'Avatar',
      dataIndex: 'avatar',
      key: 'avatar',
      render: (avatar) => (
        <img
          src={avatar}
          alt="User Avatar"
          className="w-10 h-10 rounded-full object-cover"
        />
      ),
    },
  ];

  if (isLoading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <Spin size="large" />
      </div>
    );
  }

  if (isError) {
    return (
      <div className="p-8">
        <Alert
          message="Error fetching users"
          description={error.message}
          type="error"
          showIcon
        />
      </div>
    );
  }

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">Users Listing</h1>
      <Table
        columns={columns}
        dataSource={data}
        rowKey="id"
        bordered
        pagination={{ pageSize: 10 }}
      />
    </div>
  );
};

export default UserListingView;
