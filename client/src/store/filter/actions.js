import {
  SET_GENRES,
  SET_FORMATS,
  SET_MIN_PRICE,
  SET_MAX_PRICE,
  SET_SEARCH_STRING,
  SET_SELECTED_GENRE,
  SET_SELECTED_SORT,
} from './types';

export const setGenres = (genre) => ({
  type: SET_GENRES,
  payload: genre,
});

export const setFormats = (format) => ({
  type: SET_FORMATS,
  payload: format,
});

export const setMinPrice = (minPrice) => ({
  type: SET_MIN_PRICE,
  payload: minPrice,
});

export const setMaxPrice = (maxPrice) => ({
  type: SET_MAX_PRICE,
  payload: maxPrice,
});

export const setSearchString = (searchString) => ({
  type: SET_SEARCH_STRING,
  payload: searchString,
});

export const setSelectedGenre = (genre) => ({
  type: SET_SELECTED_GENRE,
  payload: genre,
});

export const setSelectedSort = (sort) => ({
  type: SET_SELECTED_SORT,
  payload: sort,
});

