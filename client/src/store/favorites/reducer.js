import { REMOVE_FROM_FAVORITES, SET_BOOK_TO_FAVORITES } from './types';

export const favoritesReducer = (state = [], action) => {
  switch (action.type) {
    case SET_BOOK_TO_FAVORITES:
      return [...state, action.payload];

    case REMOVE_FROM_FAVORITES:
      return state.filter((favorites) => favorites !== action.payload);

    default:
      return state;
  }
};
