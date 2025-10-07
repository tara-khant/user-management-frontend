import { useQuery } from '@tanstack/react-query';
import { axiosClient } from '../utils/axiosClient';

const fetchUsers = async () => {
  const response = await axiosClient.get('/users');
  return response.data;
};

export const useUsers = () => {
  return useQuery({
    queryKey: ['users'],
    queryFn: fetchUsers,
  });
};
