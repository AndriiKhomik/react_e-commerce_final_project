import {
  ALL_BOOKS_REMOVED_FROM_CART,
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
    return: bookId,
  };
};

export const decreaseAmount = (bookId) => {
  return {
    type: DECREASE_BOOK_AMOUNT,
    return: bookId,
  };
};

export const bookRemovedFromCart = (bookId) => {
  return {
    type: BOOK_REMOVED_FROM_CART,
    payload: bookId,
  };
};

export const allBookRemovedFromCart = (bookId) => {
  return {
    type: ALL_BOOKS_REMOVED_FROM_CART,
    payload: bookId,
  };
};
