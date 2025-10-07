import React, { startTransition, useState } from 'react';
import CreateUserView from './CreateUserView';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { useCreateUser } from '../../../services/useCreateUser';
import { useQueryClient } from '@tanstack/react-query';

const CreateUser = () => {
  const [errorMessage, setErrorMessage] = useState('');
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const { mutate } = useCreateUser();

  const formData = useForm({
    defaultValues: {
      name: '',
      role: 'customer',
      email: '',
      password: '',
      avatar: '',
      addresses: [{ street: '', city: '', state: '', zip: '' }],
    },
  });

  const handleCreateUser = (data) => {
    const id = Date.now();
    const payload = { id, ...data };

    mutate(payload, {
      onSuccess: (res) => {
        formData.reset();
        queryClient.invalidateQueries(['users']);
        startTransition(() => {
          navigate('/users');
        });
      },
      onError: (error) => {
        setErrorMessage('Failed to create user');
      },
    });
  };

  return (
    <CreateUserView
      formData={formData}
      onCreateUser={handleCreateUser}
      errorMessage={errorMessage}
      setErrorMessage={setErrorMessage}
    />
  );
};

export default CreateUser;
