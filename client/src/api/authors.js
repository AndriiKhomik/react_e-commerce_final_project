import axios from 'axios';

export const getAuthors = async () => {
  const response = await axios.get(
    `${process.env.REACT_APP_BASE_URL}/api/authors`,
  );
  return response.data;
};

export const getAuthor = async (id) => {
  const response = await axios.get(
    `${process.env.REACT_APP_BASE_URL}/api${id}`,
  );
  return response.data;
};
