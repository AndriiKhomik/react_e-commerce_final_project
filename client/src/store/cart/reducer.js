import {
  ALL_BOOKS_REMOVED_FROM_CART,
  BOOK_ADDED_TO_CART,
  BOOK_REMOVED_FROM_CART,
  INCREASE_BOOK_AMOUNT,
} from './types';
// import { updateOrder } from './utils';

export const shoppingCartReducer = (state = [], action) => {
  switch (action.type) {
    case BOOK_ADDED_TO_CART: {
      const id = state.findIndex((item) => item.book === action.payload);
      if (id === -1) {
        return [...state, { book: action.payload, quantity: 1 }];
      }
      return [...state];
    }

    case INCREASE_BOOK_AMOUNT: {
      return state;
    }

    case BOOK_REMOVED_FROM_CART:
      return state;

    case ALL_BOOKS_REMOVED_FROM_CART: {
      const newShoppingCart = state.shoppingCart.find(
        ({ itemNo }) => itemNo === action.payload,
      );
      return newShoppingCart;
    }

    default:
      return state;
  }
};
