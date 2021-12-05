import { host } from './variables';

export const getAuthors = async () => {
  const response = await fetch(`${host}/api/authors`);
  if (!response.ok) {
    throw new Error(`Error - ${response.status}`);
  }
  return response.json();
};

export const getAuthor = async (id) => {
  const response = await fetch(`${host}/api${id}`);
  if (!response.ok) {
    throw new Error(`Error - ${response.status}`);
  }
  return response.json();
};
