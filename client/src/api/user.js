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
