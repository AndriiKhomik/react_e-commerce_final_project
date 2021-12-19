// const token =
//   'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxYTkyYzg5NjgxZDY1MTczNDA2YjMzMyIsImZpcnN0TmFtZSI6IkN1c3RvbWVyIiwibGFzdE5hbWUiOiJOZXdvbmUiLCJpc0FkbWluIjp0cnVlLCJpYXQiOjE2MzkxNjYwOTUsImV4cCI6MTYzOTIwMjA5NX0.75_QB5Ndi_xJem1Dk_VzHDdYVjhOMGMSk-jQvtoIM5E';

export const postOrder = async (order) => {
  const response = await fetch(`${process.env.REACT_APP_BASE_URL}/api/orders`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      // Authorization: `${token}`,
    },
    body: JSON.stringify(order),
  });
  if (!response.ok) {
    throw new Error(`Could not fetch ${process.env.REACT_APP_BASE_URL}`);
  }
  return response.json();
};
