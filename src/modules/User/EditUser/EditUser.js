import React, { startTransition, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate, useParams } from 'react-router-dom';
import { useQueryClient } from '@tanstack/react-query';
import { useUserDetails } from '../../../services/useGetUser';
import { useEditUser } from '../../../services/useEditUser';
import EditUserView from './EditUserView';

const EditUser = ({ onEditUser }) => {
  const [errorMessage, setErrorMessage] = useState('');
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const { id } = useParams();

  const { mutate } = useEditUser(id);

  const { data: user } = useUserDetails(id);

  const formData = useForm({
    defaultValues: user,
  });

  useEffect(() => {
    formData.reset(user);
  }, [user]);

  const handleEditUser = (data) => {
    mutate(data, {
      onSuccess: (res) => {
        formData.reset();
        queryClient.invalidateQueries(['users']);
        startTransition(() => {
          navigate('/users');
        });
      },
      onError: (error) => {
        setErrorMessage('Failed to edit user');
      },
    });
  };

  return (
    <EditUserView
      formData={formData}
      onEditUser={handleEditUser}
      errorMessage={errorMessage}
      setErrorMessage={setErrorMessage}
    />
  );
};

export default EditUser;
