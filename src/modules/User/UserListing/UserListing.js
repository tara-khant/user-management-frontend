import React, { startTransition } from 'react';
import UserListingView from './UserListingView';
import { useNavigate } from 'react-router-dom';
import { useDeleteUser } from '../../../services/useDeleteUser';
import { message } from 'antd';

const UserListing = () => {
  const navigate = useNavigate();
  const deleteUserMutation = useDeleteUser();

  const handleCreateUser = () => {
    startTransition(() => {
      navigate('/users/create');
    });
  };

  const handleClickListItem = (id) => {
    startTransition(() => {
      navigate(`/users/${id}`);
    });
  };

  const handleDelete = (id) => {
    deleteUserMutation.mutate(id, {
      onSuccess: () => {
        message.success('User deleted successfully');
      },
      onError: () => {
        message.error('Failed to delete user');
      },
    });
  };

  const handleEditClick = (id) => {
    startTransition(() => {
      navigate(`/users/edit/${id}`);
    });
  };

  return (
    <UserListingView
      onCreateUser={handleCreateUser}
      onClickListItem={handleClickListItem}
      onDelete={handleDelete}
      onEdit={handleEditClick}
    />
  );
};

export default UserListing;
