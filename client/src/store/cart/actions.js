import { BOOK_ADDED_TO_CART } from './types';

export const addItem = (book) => ({
  type: BOOK_ADDED_TO_CART,
  payload: book,
});
