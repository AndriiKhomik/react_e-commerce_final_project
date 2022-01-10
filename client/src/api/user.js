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
  const response = await fetch(
    `${process.env.REACT_APP_BASE_URL}/api/customers`,
    {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(userData),
    },
  );
  if (!response.ok) {
    return response.json();
  }
  return response.json();
};

export const updatePassword = async (passwordData, token) => {
  const response = await fetch(
    `${process.env.REACT_APP_BASE_URL}/api/customers/password`,
    {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(passwordData),
    },
  );
  if (!response.ok) {
    return response.json();
  }
  return response.json();
};
