import axios from 'axios';

const EXCLUDE_REDIRECT_PATHS = ['/login'];
const API_URL = process.env.REACT_APP_API_URL;
const axiosClient = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

axiosClient.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');

  if (token && token !== 'undefined') {
    config.headers = {
      ...config.headers,
      Authorization: JSON.parse(token),
    };
  }

  return config;
});

axiosClient.interceptors.response.use(
  (response) => {
    console.log(response);
    const { status, data } = response;

    if (status === 201 && data?.access_token) {
      localStorage.setItem('token', JSON.stringify(data.access_token));
    }

    return response;
  },
  (error) => {
    const status = error?.response?.status;

    if (
      status === 401 &&
      !EXCLUDE_REDIRECT_PATHS.includes(window.location.pathname)
    ) {
      localStorage.clear();
      window.location.href = '/login';
    }

    return Promise.reject(error);
  }
);

export { axiosClient };
