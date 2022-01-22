import axios from 'axios';

export const registerUser = async (user) => {
  const response = await fetch(
    `${process.env.REACT_APP_BASE_URL}/api/customers`,
    {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(user),
    },
  );
  if (!response.ok) {
    return response.json();
  }
  return response.json();
};

export const loginUser = async (loginData) => {
  const response = await fetch(
    `${process.env.REACT_APP_BASE_URL}/api/customers/login`,
    {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(loginData),
    },
  );
  if (!response.ok) {
    return response.json();
  }
  return response.json();
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
