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
