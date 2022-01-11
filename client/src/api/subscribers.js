export const addSubscriber = async (subscriber) => {
  let response;
  try {
    response = await fetch(
      `${process.env.REACT_APP_BASE_URL}/api/subscribers`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(subscriber),
      },
    );
  } catch (err) {
    throw err(`Could not fetch`);
  }
  return response && response.json();
};
