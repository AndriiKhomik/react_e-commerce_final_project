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
