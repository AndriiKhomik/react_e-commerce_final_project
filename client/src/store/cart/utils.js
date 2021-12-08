export const addItemToCart = (shoppingCart, item) => {
  const existingCartItem = shoppingCart.find(
    (shoppingCartItem) => shoppingCartItem.id === item.id,
  );

  if (existingCartItem) {
    return shoppingCart.map((cartItem) =>
      cartItem.id === item.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem,
    );
  }

  return [...shoppingCart, { ...item, quantity: 1 }];
};
