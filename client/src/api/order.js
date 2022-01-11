import axios from 'axios';

export const postOrder = async (order) => {
  const response = await axios.post(
    `${process.env.REACT_APP_BASE_URL}/api/orders`,
    order,
  );
  return response.data;
};
