import React from 'react';
import { Table, Spin, Alert, Button } from 'antd';
import { useUsers } from '../../../services/useUsers';
import { columns } from './Columns';

const UserListingView = ({
  onCreateUser,
  onClickListItem,
  onDelete,
  onEdit,
}) => {
  const { data: users = [], isLoading, isError, error } = useUsers();
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

  const sortedUsers = [...users].reverse();

  return (
    <div className="p-8">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold">Users List</h1>
        <Button type="primary" onClick={onCreateUser}>
          Create User
        </Button>
      </div>

      <Table
        columns={columns({ onDelete, onClickListItem, onEdit })}
        dataSource={sortedUsers}
        rowKey="id"
        bordered
        pagination={{ pageSize: 10 }}
      />
    </div>
  );
};

export default UserListingView;
