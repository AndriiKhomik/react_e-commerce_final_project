import { SET_BOOKS } from './types';

export const booksReducer = (state = [], action) => {
  switch (action.type) {
    case SET_BOOKS:
      return action.payload;

    default:
      return state;
  }
};
