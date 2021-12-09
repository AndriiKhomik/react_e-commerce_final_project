import { host } from './variables';

export const registerUser = async (user) => {
  const response = await fetch(`${host}/api/customers`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(user),
  });
  if (!response.ok) {
    throw new Error(`Error - ${response.status}`);
  }
  return response.json();
};

export const loginUser = async (loginData) => {
  const response = await fetch(`${host}/api/customers/login`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(loginData),
  });
  if (!response.ok) {
    throw new Error(`Error - ${response.status}`);
  }
  return response.json();
};
