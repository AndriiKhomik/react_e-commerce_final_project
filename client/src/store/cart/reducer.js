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
      const exists = state.some(
        (item) => item.itemNo === action.payload.itemNo,
      );
      if (!exists) {
        return [...state, { ...action.payload, quantity: 1 }];
      }
      return state.map((item) => {
        return item.itemNo === action.payload.itemNo
          ? { ...item, quantity: item.quantity + 1 }
          : item;
      });
    }

    case INCREASE_BOOK_AMOUNT: {
      return state;
    }

    case BOOK_REMOVED_FROM_CART: {
      if (
        state.some(
          (item) => item.book === action.payload && item.quantity === 1,
        )
      ) {
        return state.filter((item) => item.book !== action.payload);
      }
      return state.map((item) => {
        return item.book === action.payload
          ? { ...item, quantity: item.quantity - 1 }
          : item;
      });
    }

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
