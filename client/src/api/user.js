import axios from 'axios';

export const registerUser = async (user) => {
  const response = await axios.post(
    `${process.env.REACT_APP_BASE_URL}/api/customers`,
    user,
  );
  return response.data;
};

export const loginUser = async (loginData) => {
  const response = await axios.post(
    `${process.env.REACT_APP_BASE_URL}/api/customers/login`,
    loginData,
  );
  return response.data;
};

export const updateUser = async (userData, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const response = await axios.put(
    `${process.env.REACT_APP_BASE_URL}/api/customers`,
    userData,
    config,
  );
  return response.data;
};

export const updatePassword = async (passwordData, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const response = await axios.put(
    `${process.env.REACT_APP_BASE_URL}/api/customers/password`,
    passwordData,
    config,
  );
  return response.data;
};
