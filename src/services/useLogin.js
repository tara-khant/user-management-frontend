import { useMutation } from '@tanstack/react-query';
import { axiosClient } from '../utils/axiosClient';

const loginUser = async (data) => {
  return axiosClient.post(`/auth/login`, { ...data });
};

export const useLogin = () => {
  return useMutation({
    mutationFn: loginUser,
    onError: (error) => {
      console.error('Login Error:', error);
    },
  });
};
