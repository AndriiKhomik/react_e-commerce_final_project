import {
  BOOK_ADDED_TO_CART,
  BOOK_REMOVED_FROM_CART,
  DECREASE_BOOK_AMOUNT,
  INCREASE_BOOK_AMOUNT,
} from './types';

export const bookAddedToCart = (bookId) => {
  return {
    type: BOOK_ADDED_TO_CART,
    payload: bookId,
  };
};

export const increaseAmount = (bookId) => {
  return {
    type: INCREASE_BOOK_AMOUNT,
    payload: bookId,
  };
};

export const decreaseAmount = (bookId) => {
  return {
    type: DECREASE_BOOK_AMOUNT,
    payload: bookId,
  };
};

export const bookRemovedFromCart = (bookId) => {
  return {
    type: BOOK_REMOVED_FROM_CART,
    payload: bookId,
  };
};
