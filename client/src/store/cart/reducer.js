import {
  BOOK_ADDED_TO_CART,
  BOOK_REMOVED_FROM_CART,
  DECREASE_BOOK_AMOUNT,
  INCREASE_BOOK_AMOUNT,
} from './types';

export const shoppingCartReducer = (state = [], action) => {
  switch (action.type) {
    case BOOK_ADDED_TO_CART: {
      const exists = state.some(
        (item) => item.itemNo === action.payload.itemNo,
      );
      if (!exists) {
        return [...state, { ...action.payload, cartQuantity: 1 }];
      }
      return state.map((item) => {
        return item.itemNo === action.payload.itemNo
          ? { ...item, cartQuantity: item.cartQuantity + 1 }
          : item;
      });
    }

    case INCREASE_BOOK_AMOUNT: {
      return state.map((item) => {
        return item.itemNo === action.payload
          ? { ...item, cartQuantity: item.cartQuantity + 1 }
          : item;
      });
    }

    case DECREASE_BOOK_AMOUNT: {
      if (
        state.some(
          (item) => item.itemNo === action.payload && item.cartQuantity === 1,
        )
      ) {
        return state.filter((item) => item.itemNo !== action.payload);
      }
      return state.map((item) => {
        return item.itemNo === action.payload
          ? { ...item, cartQuantity: item.cartQuantity - 1 }
          : item;
      });
    }

    case BOOK_REMOVED_FROM_CART: {
      return state.filter((item) => item.itemNo !== action.payload);
    }

    default:
      return state;
  }
};
