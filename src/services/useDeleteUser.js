import { useMutation, useQueryClient } from '@tanstack/react-query';
import { axiosClient } from '../utils/axiosClient';

const deleteUser = async (id) => {
  const response = await axiosClient.delete(`/users/${id}`);
  return response.data;
};

export const useDeleteUser = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: deleteUser,
    onSuccess: (_, userId) => {
      queryClient.invalidateQueries(['users']);
    },
    onError: (error) => {
      console.error('Failed to delete user:', error);
    },
  });
};
