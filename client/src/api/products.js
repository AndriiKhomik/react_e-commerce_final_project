import axios from 'axios';

export const getProducts = async () => {
  const response = await axios.get(
    `${process.env.REACT_APP_BASE_URL}/api/products`,
  );
  return response.data;
};

export const getItemProduct = async (itemNo) => {
  const response = await axios.get(
    `${process.env.REACT_APP_BASE_URL}/api${itemNo}`,
  );
  return response.data;
};

export const getProductsByQuery = async (
  query,
  value = true,
  exceptId = '',
) => {
  const id = exceptId ? `&exceptId=${exceptId}` : '';
  const response = await axios.get(
    `${process.env.REACT_APP_BASE_URL}/api/products?${query}=${value}${id}`,
  );
  return response.data;
};

export const filterProducts = async (queryString = '') => {
  const response = await axios.get(
    `${process.env.REACT_APP_BASE_URL}/api/products/filter?perPage=12&${queryString}`,
  );
  return response.data;
};

export const getFavoriteProducts = async (listOfFavorites = '') => {
  const favorites =
    listOfFavorites.length > 0 ? `?favorites=${listOfFavorites.join(',')}` : '';
  const response = await fetch(
    `${process.env.REACT_APP_BASE_URL}/api/products/favorites${favorites}`,
  );
  if (!response.ok) {
    throw new Error(`Error - ${response.status}`);
  }
  return response.json();
};
