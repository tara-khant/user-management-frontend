import { useMutation } from '@tanstack/react-query';
import { axiosClient } from '../utils/axiosClient';

const editUser = async ({ id, payload }) => {
  return axiosClient.put(`/users/${id}`, { ...payload });
};

export const useEditUser = (id) => {
  return useMutation({
    mutationFn: (data) => editUser({ id, payload: data }),
    onError: (error) => {
      console.error('Edit User Error:', error);
    },
  });
};
