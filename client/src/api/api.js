const host = 'http://localhost:5000';

export const getProducts = async () => {
  const response = await fetch(`${host}//api/products`);
  if (response.ok) {
    return response.json();
  }
  throw new Error(response);
};

export const getItemProduct = async (itemNo) => {
  const response = await fetch(`${host}//api/products/${itemNo}`);
  if (response.ok) {
    return response.json();
  }
  throw new Error(response);
};
