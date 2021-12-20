import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import thunk from 'redux-thunk';
import { booksReducer } from './bookList/reducer';
import { favoritesReducer } from './favorites/reducer';
import { shoppingCartReducer } from './cart/reducer';
import { filterReducer } from './filter/reducer';
import {
  REMOVE_FROM_FAVORITES,
  SET_BOOK_TO_FAVORITES,
} from './favorites/types';
import {
  BOOK_ADDED_TO_CART,
  BOOK_REMOVED_FROM_CART,
  DECREASE_BOOK_AMOUNT,
  INCREASE_BOOK_AMOUNT,
} from './cart/types';
import { setIsLoginReducer } from './login/reducer';

const rootReducer = combineReducers({
  bookList: booksReducer,
  favorites: favoritesReducer,
  shoppingCart: shoppingCartReducer,
  // shoppingCart: updateShoppingCartReducer,
  filter: filterReducer,
  login: setIsLoginReducer,
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

const cartMiddleware = () => (next) => (action) => {
  const result = next(action);
  if (
    /* eslint-disable no-constant-condition */
    [
      BOOK_ADDED_TO_CART,
      BOOK_REMOVED_FROM_CART,
      INCREASE_BOOK_AMOUNT,
      DECREASE_BOOK_AMOUNT,
    ]
  ) {
    // eslint-disable-next-line no-use-before-define
    const { shoppingCart } = store.getState();
    localStorage.setItem('shoppingCart', JSON.stringify(shoppingCart));
  }
  return result;
};

let initialState = {};

const favoritesFromLS = localStorage.getItem('favorites');
const shoppingCartFromLS = localStorage.getItem('shoppingCart');

if (favoritesFromLS) {
  try {
    initialState = { ...initialState, favorites: JSON.parse(favoritesFromLS) };
  } catch (e) {
    throw new Error(e);
  }
}

if (shoppingCartFromLS) {
  try {
    initialState = {
      ...initialState,
      shoppingCart: JSON.parse(shoppingCartFromLS),
    };
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
  compose(
    applyMiddleware(thunk, favoritesMiddleware, cartMiddleware),
    devTools,
  ),
);

export default store;
