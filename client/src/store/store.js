import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import thunk from 'redux-thunk';
import { booksReducer } from './bookList/reducer';
import { updateShoppingCartReducer } from './cart/reducer';
import { favoritesReducer } from './favorites/reducer';
import {
  REMOVE_FROM_FAVORITES,
  SET_BOOK_TO_FAVORITES,
} from './favorites/types';

const rootReducer = combineReducers({
  books: booksReducer,
  favorites: favoritesReducer,
  shoppingCart: updateShoppingCartReducer,
});

const favoritesMiddleware = () => (next) => (action) => {
  const result = next(action);
  if ([SET_BOOK_TO_FAVORITES, REMOVE_FROM_FAVORITES].includes(action.type)) {
    // eslint-disable-next-line no-use-before-define
    const { favorites } = store.getState();
    localStorage.setItem('favorites', JSON.stringify(favorites));
  }
  return result;
};

let initialState = {};

const favoritesFromLS = localStorage.getItem('favorites');

if (favoritesFromLS) {
  try {
    initialState = { ...initialState, favorites: JSON.parse(favoritesFromLS) };
  } catch (e) {
    throw new Error(e);
  }
}

// eslint-disable-next-line no-underscore-dangle
const devTools = window.__REDUX_DEVTOOLS_EXTENSION__
  ? // eslint-disable-next-line no-underscore-dangle
    window.__REDUX_DEVTOOLS_EXTENSION__()
  : (args) => args;

const store = createStore(
  rootReducer,
  initialState,
  compose(applyMiddleware(thunk, favoritesMiddleware), devTools),
);

export default store;
