import { host } from './variables';

export const getProducts = async () => {
  const response = await fetch(`${host}/api/products`);
  if (!response.ok) {
    throw new Error(`Error - ${response.status}`);
  }
  return response.json();
};
export const getItemProduct = async (itemNo) => {
  const response = await fetch(`${host}/api${itemNo}`);
  if (!response.ok) {
    throw new Error(`Error - ${response.status}`);
  }
  return response.json();
};

export const getProductsByQuery = async (query, value = true) => {
  const response = await fetch(`${host}/api/products?${query}=${value}`);
  if (!response.ok) {
    throw new Error(`Error - ${response.status}`);
  }
  return response.json();
};
