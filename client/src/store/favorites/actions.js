import { REMOVE_FROM_FAVORITES, SET_BOOK_TO_FAVORITES } from './types';

export const setFavorites = (book) => {
  return {
    type: SET_BOOK_TO_FAVORITES,
    payload: book,
  };
};

export const removeFromFavorites = (id) => {
  return {
    type: REMOVE_FROM_FAVORITES,
    payload: id,
  };
};
