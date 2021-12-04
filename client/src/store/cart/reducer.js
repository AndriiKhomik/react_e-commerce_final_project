import { addItemToCart } from './actions';
import { BOOK_ADDED_TO_CART, BOOK_REMOVED_FROM_CART } from './types';

export const updateShoppingCartReducer = (state = [], action) => {
  switch (action.type) {
    case BOOK_ADDED_TO_CART:
      return {
        ...state,
        shoppingCart: addItemToCart(state.shoppingCart, action.payload),
      };

    case BOOK_REMOVED_FROM_CART:
      return {
        state,
      };

    default:
      return state;
  }
};
