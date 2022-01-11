import axios from 'axios';

export const getPromos = async () => {
  const response = await axios.get(
    `${process.env.REACT_APP_BASE_URL}/api/slides`,
  );
  return response.data;
};

export const getPromo = async (id) => {
  const response = await axios.get(
    `${process.env.REACT_APP_BASE_URL}/api/slides/${id}`,
  );
  return response.data;
};
