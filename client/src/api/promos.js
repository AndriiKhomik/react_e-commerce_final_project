export const getPromos = async () => {
  const response = await fetch(`${process.env.REACT_APP_BASE_URL}/api/slides`);
  if (!response.ok) {
    throw new Error(`Error - ${response.status}`);
  }
  return response.json();
};

export const getPromo = async (id) => {
  const response = await fetch(
    `${process.env.REACT_APP_BASE_URL}/api/slides/${id}`,
  );
  if (!response.ok) {
    throw new Error(`Error - ${response.status}`);
  }
  return response.json();
};
