import { host } from './variables';

export const getAuthors = async () => {
  const response = await fetch(`${host}/api/authors`);
  if (!response.ok) {
    throw new Error(`Error - ${response.status}`);
  }
  return response.json();
};
