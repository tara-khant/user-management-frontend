import { useQuery } from '@tanstack/react-query';
import { axiosClient } from '../utils/axiosClient';

const fetchUserDetails = async (id) => {
  const response = await axiosClient.get(`/users/${id}`);
  return response.data;
};

export const useUserDetails = (id) => {
  return useQuery({
    queryKey: ['userDetails', id],
    queryFn: () => fetchUserDetails(id),
  });
};
