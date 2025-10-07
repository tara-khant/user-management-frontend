import { useMutation } from '@tanstack/react-query';
import { axiosClient } from '../utils/axiosClient';

const createUser = async (data) => {
  return axiosClient.post(`/users`, { ...data });
};

export const useCreateUser = () => {
  return useMutation({
    mutationFn: createUser,
    onError: (error) => {
      console.error('Create User Error:', error);
    },
  });
};
