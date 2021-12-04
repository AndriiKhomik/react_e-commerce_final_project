import { SET_BOOKS } from './types';

export const setBooks = (books) => {
  return {
    type: SET_BOOKS,
    payload: books,
  };
};
