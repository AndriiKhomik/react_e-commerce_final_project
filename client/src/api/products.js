export const getProducts = async () => {
  const response = await fetch(
    `${process.env.REACT_APP_BASE_URL}/api/products`,
  );
  if (!response.ok) {
    throw new Error(`Error - ${response.status}`);
  }
  return response.json();
};
export const getItemProduct = async (itemNo) => {
  const response = await fetch(
    `${process.env.REACT_APP_BASE_URL}/api${itemNo}`,
  );
  if (!response.ok) {
    throw new Error(`Error - ${response.status}`);
  }
  return response.json();
};

export const getProductsByQuery = async (query, value = true) => {
  const response = await fetch(
    `${process.env.REACT_APP_BASE_URL}/api/products?${query}=${value}`,
  );
  if (!response.ok) {
    throw new Error(`Error - ${response.status}`);
  }
  return response.json();
};
